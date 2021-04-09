const express = require('express')
const app = express()
const port = 3333
const api = require('./api/axios/api');
/*
app.get('/', (req, res) => {
  res.send('AGORA VAI BROTHER!')
})
*/
app.post('/testarapi', async (req, res) =>{
  const data = {
    amount: 200,
    credentials: '123456',
    currency: 'EUR',
    description: 'description',
    fromMember: '16586',
    fromMemberPrincipalType: 'USER',
    fromSystem: false,
    returnStatus: true,
    toSystem: true,
    traceData: 'tracer',
    traceNumber: '79374',
    transferTypeId: 8
  }
  await api
      .post('/test/ws/payment/doPayment', data)
      .then( (res) => {
        console.log(res) 
        res.send('OK' + res)
      })
      .catch((err) => {
        console.log(err) 
        res.send('falhou' + res)
      });

})

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})