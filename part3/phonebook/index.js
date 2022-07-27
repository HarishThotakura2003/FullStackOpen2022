const { response, request } = require('express')
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())
app.use(morgan('tiny'))
app.use(express.static('build'))

const PORT = process.env.PORT || 3001
const baseUrl = 'http://localhost:3001/api/persons'
let Contacts = [
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]
const infoResponse =`<p>Phonebook has info for ${Contacts.length} people</p><p>${new Date().toGMTString()}</p>`
const contactFetchId = (id) =>{
  return Contacts.find(contact=>contact.id === id)
}
const contactFetchName = (name) =>{
  return Contacts.find(contact=>contact.name === name)
}

const generateId = () =>{
  const max = Contacts.length>0 ? Math.max(...Contacts.map(c=>c.id)):0
  return max +1
}

app.get("/api/persons",(req,res)=>{
  res.json(Contacts).end()
})

app.post('/api/persons',(req,res)=>{
  const body = req.body
  const name = body.name
  const number = body.number
  console.log(body)
  console.log(number)
  if(!name||!number){return res.status(400).json({error:"content missing"})}
  if(contactFetchName(name)){return res.status(409).json({error:"name must be unique"})}
  const n ={name,number,id:generateId()}
  Contacts=Contacts.concat(n)
  res.json(Contacts)
})

app.get("/api/persons/:id",(req,res)=>{
  const id = Number(req.params.id)
  const response =Contacts.find(contact=>contact.id === id)
  if(response){res.json(response)}
  else{res.status(404).end()}
})

app.get("/info",(req,res)=>{
  res.send(infoResponse)
})

app.listen(PORT)
