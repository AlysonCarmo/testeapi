const axios = require('axios').default;

const api = axios.create({
  baseURL: 'https://app.offsetpay.com',
  headers: { 'Content-Type': 'application/json',
              'Authorization': 'Basic NTU1bWFya2V0OjEyMzQ1Ng==' 
            },
  timeout: 15000,
});

module.exports = api;
