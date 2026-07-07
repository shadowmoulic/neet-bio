const Razorpay = require('razorpay');

const PLAN_MAP = {
  'class11_monthly': 'plan_TAg5Se3JfdsdzS',
  'class12_monthly': 'plan_TAg5Se3JfdsdzS',
  'class11_yearly': 'plan_TAg5lkQznCnGjd',
  'class12_yearly': 'plan_TAg5lkQznCnGjd',
  'both_monthly': 'plan_TAg63Hi63FlotE',
  'both_yearly': 'plan_TAg6zyMzRMxZvi'
};

const UPFRONT_MAP = {
  'class11_monthly': 33000, // 789 - 459 = 330 INR
  'class12_monthly': 33000,
  'both_monthly': 55000, // 1239 - 689 = 550 INR
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

  const keyId = process.env.RAZORPAY_KEY_ID;
  const keySecret = process.env.RAZORPAY_KEY_SECRET;

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

    // Handle 100% discount coupon
    if (coupon === 'NEET@100#') {
      is_100_percent_free_trial = true;
      upfront_amount = 0; // No upfront fee if it's 100% off first month
      
      // Delay subscription start by 1 month (30 days) to give the first month free
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
