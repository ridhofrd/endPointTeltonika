const express = require('express');

const app = express();

app.get('/get_json_string', async(req,res) => {
    try{
        const teltonikaState = req.query.json_string

        res.status(200).send({ teltonikaState })
        console.log(teltonikaState)
    }
    catch(err){
        console.log(err)
        res.status(500).send("Server Error")
    }
})

app.listen(3000)

