const express = require('express');
const bodyParser = require('body-parser'); 
const axios = require('axios');


const app = express();

app.use(bodyParser.json()); 

app.get('/get_json_string', async(req,res) => {
    try{
        const imei = req.query.imei
        const codec_data = req.query.codec_data
        const io_data = req.query.io_data
        
        res.status(200).send({ imei, codec_data, io_data })
        console.log(imei)
        console.log(codec_data)
        console.log(io_data)
    }
    catch(err){
        console.log(err)
        res.status(500).send("Server Error")
    }
})

app.post('/save_data_loc', async (req, res) => {
    
    const imei = req.body.imei
    const codec_data = req.body.codec_data
    const io_data = req.body.io_data

    try {
        // Mengirim data ke API eksternal menggunakan axios
        const response = await axios.post('https://smart-coldchain.com/api/teltonikaDB', {
            imei,
            codec_data,
            io_data
        });

        // Mengirimkan respons dari API eksternal kembali ke client
        res.status(response.status).send(response.data);

        // Logging data
        console.log('IMEI:', imei);
        console.log('Codec Data:', codec_data);
        console.log('IO Data:', io_data);
    } catch (error) {
        // Menghandle error dari permintaan API
        console.error('Error posting data to external API:', error.message);
        res.status(500).send({ error: 'Failed to post data to external API' });
    }
    
    // res.status(200).send({ imei, codec_data, io_data})
    // console.log(imei)
    // console.log(codec_data)
    // console.log(io_data)
});

app.listen(3000)

