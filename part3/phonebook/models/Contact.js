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
    name: {
        type: String,
        required: [true,"Name required"],
        unique: true,
        minLength: [3,"must have at least 3 characters"],
    },
    number:{
        type: Number,
        required: [true,"numer required"],
        minlength: [8,'Number must have atleast 8 characters']
    }
})

module.exports = mongoose.model('Contact', ContactScheme)