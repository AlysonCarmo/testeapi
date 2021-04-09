const axios = require('axios').default;

const api = axios.create({
  baseURL: 'https://app.offsetpay.com',
  headers: { 'Content-Type': 'application/json',
              'Authorization': 'Basic NTU1bWFya2V0OjEyMzQ1Ng==',
              'cookie': 'JSESSIONID=31C861FF1C6E273C07C2119BE930E547', 
            },
  timeout: 15000,
});

module.exports = api;
