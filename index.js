const axios = require('axios');
require('dotenv').config();

const sendPayment = async () => {
  const payload = {
    amount: 1000,
    currency: 'XAF',
    recipient: '242061234567',
    operator: 'MTN',
    reference: 'TestTunnelIA'
  };

  const headers = {
    'Authorization': process.env.PAWAPAY_SANDBOX_TOKEN,
    'Content-Type': 'application/json'
  };

  try {
    const response = await axios.post('https://api.sandbox.pawapay.io/v1/payments', payload, { headers });
    console.log('Réponse API :', response.data);
  } catch (error) {
    console.error('Erreur API :', error.response?.data || error.message);
  }
};

sendPayment();
