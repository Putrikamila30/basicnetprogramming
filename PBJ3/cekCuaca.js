const request = require('postman-request') 
const urlCuaca = 'http://api.weatherstack.com/current?access_key=2024122d4605dbd7f5a303d1cf5098e2&query=-0.8807878762677414,100.34887473873006&m' 

request({ url: urlCuaca, json: true }, (error, response) => { 
    if (error) {
        console.log('Tidak dapat mengakses layanan cuaca.');
    } else if (response.body.error) {
        console.log('Error: ' + response.body.error.info);
    } else {
        const current = response.body.current;
        console.log('Saat ini suhu diluar mencapai ' + current.temperature +  ' derajat celcius.');
        console.log('Kemungkinan terjadinya hujan adalah ' + current.precip  + '%');
        console.log('Deskripsi cuaca: ' + current.weather_descriptions[0]);
    }
});
