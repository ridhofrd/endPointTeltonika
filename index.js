const express = require('express');

const app = express();

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

app.listen(3000)

