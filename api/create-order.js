const Razorpay = require('razorpay');

const PLAN_MAP = {
  'class11_monthly': 'plan_TDsERfQh0b7x0a',
  'class12_monthly': 'plan_TDsERfQh0b7x0a',
  'class11_yearly': 'plan_TCEmNDngMsz3SQ',
  'class12_yearly': 'plan_TCEmNDngMsz3SQ',
  'both_monthly': 'plan_TDsEnT65rVMbpF',
  'both_yearly': 'plan_TCEmvI14LeKtOI'
};

const UPFRONT_MAP = {
  'class11_monthly': 14900, // ₹149 first month
  'class12_monthly': 14900, // ₹149 first month
  'both_monthly': 28900, // ₹289 first month
  'class11_yearly': 0,
  'class12_yearly': 0,
  'both_yearly': 0
};

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { planType, billingCycle, coupon } = req.body || {};

  if (!planType || !billingCycle) {
    return res.status(400).json({ error: 'Missing plan configuration' });
  }

  const planKey = `${planType}_${billingCycle}`;
  const razorpayPlanId = PLAN_MAP[planKey];

  if (!razorpayPlanId) {
    return res.status(400).json({ error: 'Invalid plan configuration' });
  }

  const keyId = process.env.RAZORPAY_KEY_ID || 'rzp_live_TCEIWtRQoDv4LB';
  const keySecret = process.env.RAZORPAY_KEY_SECRET || 'LiIOdzMT7CQwq6NNZ68nKJTy';

  if (!keyId || !keySecret) {
    return res.status(500).json({ error: 'Razorpay keys not configured' });
  }

  try {
    const razorpay = new Razorpay({
      key_id: keyId,
      key_secret: keySecret,
    });

    let upfront_amount = UPFRONT_MAP[planKey] || 0;
    
    // Determine start date (Trial Period)
    let start_at = undefined;
    let is_100_percent_free_trial = false;

    if (billingCycle === 'monthly') {
      const now = Math.floor(Date.now() / 1000);
      start_at = now + (30 * 24 * 60 * 60); // 30 days trial
    }

    // Handle 100% discount coupon
    if (coupon === 'NEET@100#') {
      is_100_percent_free_trial = true;
      upfront_amount = 0; // No upfront fee if it's 100% off first month
      const now = Math.floor(Date.now() / 1000);
      start_at = now + (30 * 24 * 60 * 60); 
    } else if (coupon === 'NEET@1#') {
      // 1 Rs testing coupon: delay subscription and charge exactly 1 Rs upfront
      upfront_amount = 100; // 1 INR in paise
      const now = Math.floor(Date.now() / 1000);
      start_at = now + (30 * 24 * 60 * 60); 
    }

    const options = {
      plan_id: razorpayPlanId,
      total_count: billingCycle === 'yearly' ? 10 : 120, // Arbitrary high count for recurring
      customer_notify: 1,
    };

    if (upfront_amount > 0) {
      options.addons = [
        {
          item: {
            name: "First Month Setup Fee",
            amount: upfront_amount,
            currency: "INR"
          }
        }
      ];
    }

    if (start_at) {
      options.start_at = start_at;
    }

    const subscription = await razorpay.subscriptions.create(options);

    return res.status(200).json({
      subscription_id: subscription.id,
      is_trial: is_100_percent_free_trial,
      // For Razorpay checkout
      key: keyId
    });
  } catch (error) {
    console.error('Error creating Razorpay subscription:', error);
    return res.status(500).json({ error: error.message || 'Failed to create subscription' });
  }
};
