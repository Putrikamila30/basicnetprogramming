const request = require('postman-request') 
const url = 
'http://api.weatherstack.com/current?access_key=2024122d4605dbd7f5a303d1cf5098e2&query=' 
request({ url: url }, (error, response) => { 
console.log(response) 
//const data = JSON.parse(response.body) 
// console.log(data) 
// console.log(data.current) 
// console.log(data.current.temperature) 
}) 