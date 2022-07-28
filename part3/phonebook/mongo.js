const mongoose = require('mongoose')

if (process.argv.length<2){
    console.log("please provide password")
    process.exit(1)
}

const ContactScheme = new mongoose.Schema({
    name: String,
    number: Number,
})

const Contact = mongoose.model('Contact', ContactScheme)
const password = process.argv[2]
const url =`mongodb+srv://blah:${password}@blah.mongodb.net/?retryWrites=true&w=majority`
const name = process.argv[3]
const number = process.argv[4]

mongoose.connect(url).thne

if(process.argv.length==5){
    const contact = new Contact({
        name:name,
        number:number
    })
    contact.save()
            .then(()=>console.log(`added ${name} number ${number} to phonebook`));

    return mongoose.connection.close()
}

if(process.argv.length==3){
    console.log("phonebook:")
    Contact.find({}).then(contact=>
        contact.forEach(x=>{
            console.log(`${x.name} ${x.number}`)
        }),
        mongoose.connection.close()
        )
    
    
}

mongoose.connection.close()