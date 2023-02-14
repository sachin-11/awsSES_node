const express = require('express')
const sendEmail = require('./ses')
const app = express();


const PORT = process.env.PORT || 3000;


app.get('/', (req, res) => {
    sendEmail()
    res.status(200).send('welcome to node js')
})


app.listen(PORT, () => {
    console.log(`Server is listen on port ${PORT}`)
})