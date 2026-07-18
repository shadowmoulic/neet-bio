const { createClient } = require('@supabase/supabase-js');

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { token, userId } = req.body || {};

  if (!token || !userId) {
    return res.status(400).json({ error: 'Missing token or userId' });
  }

  // Bypass IP checking for now as requested
  return res.status(200).json({ success: true, allowed: true });
};
