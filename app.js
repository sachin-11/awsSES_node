const express = require('express')
const sendEmail = require('./ses')
const app = express();


const PORT = process.env.PORT || 5000;


app.get('/send-email', (req, res) => {
    sendEmail()
    res.status(200).send('welcome to node js')
})


app.listen(PORT, () => {
    console.log(`Server is listen on port ${PORT}`)
})