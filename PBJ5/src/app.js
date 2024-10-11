const express = require('express') 
const app = express() 
//ini halaman/page utama 
app.get('', (req, res) => { 
    es.send('<h1> Selamat datang di halaman utama</h1>') 
    }) 
    //ini halaman bantuan/FAQ (Frequently Asked Questions) 
    app.get('/bantuan', (req, res) => { 
    res.send('<h1>Ini halaman bantuan</h1>') 
    })
    app.get('/tentang', (req, res) => { 
    res.send([{
        nama: 'Putri Kamila',
        pekerjaan: 'Mahasiswa'
    }])
    })
    app.get('/infoCuaca', (req, res) => { 
    res.send([{
        prediksiCuaca: 'cuaca berpotensi hujan',
        lokasi: 'Pasaman'
        }]) 
    })

    app.listen(4000, () => { 
        console.log('Server berjalan pada port 4000.') 
        }) 