const Razorpay = require('razorpay');

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { amount, currency, receipt } = req.body || {};

  if (!amount || amount < 100) {
    return res.status(400).json({ error: 'Amount must be at least 100 paise' });
  }

  const keyId = process.env.RAZORPAY_KEY_ID;
  const keySecret = process.env.RAZORPAY_KEY_SECRET;

  if (!keyId || !keySecret) {
    return res.status(401).json({ error: 'Razorpay keys not configured' });
  }

  try {
    const razorpay = new Razorpay({
      key_id: keyId,
      key_secret: keySecret,
    });

    const options = {
      amount: parseInt(amount, 10),
      currency: currency || 'INR',
      receipt: receipt || `receipt_${Date.now()}`
    };

    const order = await razorpay.orders.create(options);

    return res.status(200).json({
      order_id: order.id,
      amount: order.amount,
      currency: order.currency
    });
  } catch (error) {
    console.error('Error creating Razorpay order:', error);
    return res.status(500).json({ error: error.message || 'Failed to create order' });
  }
};
