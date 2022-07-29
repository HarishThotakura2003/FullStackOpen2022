const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect(process.env.MONGO_URI)
        .then(()=>{
            console.log('connected')
        })
        .catch((error)=>{
            console.log(error)
        })

const ContactScheme = new mongoose.Schema({
    name: String,
    number: Number,
})

module.exports = mongoose.model('Contact', ContactScheme)