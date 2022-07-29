const { response, request } = require('express')
const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const cors = require('cors')
const Contact = require('./models/Contact')

const app = express()

app.use(cors())
app.use(express.json())
app.use(morgan((tokens, req, res) => {
  return [
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    tokens.res(req, res, 'content-length'), '-',
    tokens['response-time'](req, res), 'ms',
    JSON.stringify(req.body)
  ].join(' ')
}))
app.use(express.static('build'))

const PORT = process.env.PORT || 3001

const errorHandler = (error,request,response,next) => {
  console.log(error)
  next(error)
}

const unknownEndpoint = (req, res, next) => {
  res.status(404).send({error: 'Unknown endpoint'})
}


app.get("/api/persons",(req,res)=>{
  console.log("hello world")
  Contact.find({})
        .then(contacts=>{
    res.json(contacts)
  })
  .catch(error=>next(error))
})

app.post('/api/persons',(req,res)=>{
  const body = req.body
  if(body.contents==undefined){return res.status(400)}
  
  const contact = new Contact({
    name:body.name,
    number:Number(body.number),
  })

  contact.save()
          .then(contact=>res.json(contact))
          .catch(error=>next(error))
})

app.delete('/api/persons/:id',(req,res,next)=>{
  Contact.findByIdAndDelete(req.params.id)
        .then(result=>{
          console.log(result)
          res.status(204).end()
        })
        .catch(error=>next(error))
})

app.put('/api/persons/:id',(req,res,next)=>{
  
  const contact ={
    name:req.body.name,
    number:req.body.number
  }

  Contact.findByIdAndUpdate(req.params.id,contact,{new:true})
        .then(result=>{
          res.json(result)
        })
        .catch(error=>next(error))
})

app.get('/api/persons/:id',(req,res,next)=>{

  Contact.findById(req.params.id)
        .then(result=>{
          console.log(result)
          res.json(result)
        })
        .catch(error=>next(error))
})


app.use(unknownEndpoint)
app.use(errorHandler)

app.listen(PORT)
