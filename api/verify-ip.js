const { createClient } = require('@supabase/supabase-js');

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { token, userId } = req.body || {};

  if (!token || !userId) {
    return res.status(400).json({ error: 'Missing token or userId' });
  }

  // Get IP address
  const forwarded = req.headers['x-forwarded-for'];
  const ip = forwarded ? forwarded.split(/, /)[0] : req.socket.remoteAddress;

  if (!ip) {
    return res.status(200).json({ success: true, allowed: true }); // Fallback
  }

  // Allowlist local development IPs
  const devIps = ['::1', '127.0.0.1', 'localhost'];
  if (devIps.includes(ip)) {
    return res.status(200).json({ success: true, allowed: true, message: 'Local development IP bypassed' });
  }

  try {
    const supabaseUrl = process.env.SUPABASE_URL || 'https://qbgubcicjqkgowxgrmmp.supabase.co';
    const supabaseAnonKey = process.env.SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFiZ3ViY2ljanFrZ293eGdybW1wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODMzNDQzMTksImV4cCI6MjA5ODkyMDMxOX0.U8ILE_4Y89k9K3AQkOgNqDpYunwzDm4jBMWv1yPlE24';

    const supabase = createClient(supabaseUrl, supabaseAnonKey);

    // Verify token to ensure user is who they say they are
    const { data: { user }, error: authError } = await supabase.auth.getUser(token);
    if (authError || !user || user.id !== userId) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    // Fetch user's allowed IPs
    const { data: userData, error: fetchError } = await supabase
      .from('neet_users')
      .select('allowed_ips, role')
      .eq('id', userId)
      .single();

    if (fetchError || !userData) {
      console.error('Fetch Error:', fetchError);
      return res.status(500).json({ error: 'Database error. Did you run the SQL script in Supabase?' });
    }

    // Only strictly enforce IP for paid users
    if (userData.role !== 'paid') {
      return res.status(200).json({ success: true, allowed: true });
    }

    const allowedIps = userData.allowed_ips || [];

    // If IP is already allowed
    if (allowedIps.includes(ip)) {
      return res.status(200).json({ success: true, allowed: true });
    }

    // If max IPs (2) not reached, add this IP
    if (allowedIps.length < 2) {
      const { error: rpcError } = await supabase.rpc('add_user_ip', {
        gatephrase: 'NEET@2026#123',
        target_user_id: userId,
        new_ip: ip
      });

      if (rpcError) {
        console.error('Error adding IP:', rpcError);
        return res.status(500).json({ error: 'Failed to register device IP' });
      }

      return res.status(200).json({ success: true, allowed: true });
    }

    // If they have 2 IPs and this is a 3rd one, block them
    return res.status(403).json({ 
      success: false, 
      allowed: false, 
      message: `Device limit reached. Your account is restricted to 2 devices. Current IPs: ${allowedIps.join(', ')}`
    });

  } catch (error) {
    console.error('IP verification error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};
