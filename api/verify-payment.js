const crypto = require('crypto');
const { createClient } = require('@supabase/supabase-js');

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { razorpay_payment_id, razorpay_subscription_id, razorpay_signature, userId, planType } = req.body || {};

  if (!razorpay_payment_id || !razorpay_subscription_id || !razorpay_signature || !userId || !planType) {
    return res.status(400).json({ error: 'Missing required payment verification fields' });
  }

  const keySecret = process.env.RAZORPAY_KEY_SECRET || 'LiIOdzMT7CQwq6NNZ68nKJTy';
  if (!keySecret) {
    return res.status(500).json({ error: 'Razorpay secret key not configured' });
  }

  // Calculate HMAC-SHA256 signature for Subscriptions
  // Signature = hmac_sha256(razorpay_payment_id + '|' + razorpay_subscription_id, secret)
  const body = razorpay_payment_id + '|' + razorpay_subscription_id;
  const expectedSignature = crypto
    .createHmac('sha256', keySecret)
    .update(body.toString())
    .digest('hex');

  if (expectedSignature !== razorpay_signature) {
    return res.status(400).json({ error: 'Signature verification failed' });
  }

  // Update role and plan in Supabase
  try {
    const supabaseUrl = process.env.SUPABASE_URL || 'https://qbgubcicjqkgowxgrmmp.supabase.co';
    const supabaseAnonKey = process.env.SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFiZ3ViY2ljanFrZ293eGdybW1wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODMzNDQzMTksImV4cCI6MjA5ODkyMDMxOX0.U8ILE_4Y89k9K3AQkOgNqDpYunwzDm4jBMWv1yPlE24';

    const supabase = createClient(supabaseUrl, supabaseAnonKey);

    const { data, error } = await supabase.rpc('update_user_subscription', {
      gatephrase: 'NEET@2026#123',
      target_user_id: userId,
      new_role: 'paid',
      new_plan_type: planType,
      new_sub_id: razorpay_subscription_id
    });

    if (error) {
      throw error;
    }

    // Log the transaction in neet_purchases
    try {
      const { error: purchaseError } = await supabase
        .from('neet_purchases')
        .insert({
          user_id: userId,
          razorpay_subscription_id,
          razorpay_payment_id,
          razorpay_signature,
          plan: planType
        });
      if (purchaseError) {
        console.error('Error logging purchase to DB:', purchaseError);
      }
    } catch (dbErr) {
      console.error('Failed to insert purchase record:', dbErr);
    }

    return res.status(200).json({ success: true, message: 'Subscription verified and role updated' });
  } catch (error) {
    console.error('Error updating user role in Supabase:', error);
    return res.status(500).json({ error: error.message || 'Failed to update user role' });
  }
};
