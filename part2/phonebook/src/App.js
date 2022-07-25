import React,{useState,useEffect} from 'react'
import axios from 'axios';

import Form from './components/Form'
import Header from './components/Header'
import Content from './components/Content'
import Filter from './components/Filter'


const App = () => {
  const [allPersons,setAllPersons] = useState([])
  const [displayPersons,setDisplayPersons] = useState([])
  
  const [name,setName] = useState('')
  const [number,setNumber] = useState('')
  const [filter,setFilter] = useState('')
  
  const handleNameChange = (e) => {setName(e.target.value);}
  const handleNumberChange = (e) => {setNumber(e.target.value);}
  const address ="http://localhost:3001/persons"

  const hook =() =>{
    axios.get(address).then((res)=>{
      setDisplayPersons(res.data)
      setAllPersons(res.data)
    })
  }
  useEffect(hook,[])


  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(e.target);
    const n = {
      name:name,
      number:number,
      id:allPersons.length+1
    }
    if (allPersons.some(person=>person.name==n.name)){
      alert(`${n.name} is already added to phonebook`)
      setName('')
      setNumber('')
      await setDisplayPersons(allPersons)
    }
    else{
      await setDisplayPersons(allPersons.concat(n))
      axios.post('http://localhost:3001/persons',n)
           .then(response=>{
            console.log(response)
           })
      setAllPersons(allPersons.concat(n))
      setName('')
      setNumber('')
    }
  }
  
  const handleFilterChange =(e) => {
    setFilter(e.target.value)
    const regex = new RegExp(filter,'i');
    const filteredPersons = allPersons.filter((person=>person.name.match(regex)));
    setDisplayPersons(filteredPersons)
  }

  return (
    <div>
      <Header text="Phonebook" />
      <Filter onChange={handleFilterChange}/>
      <Header text="add a new " />
      <Form onSubmit={onSubmit} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} name={name} number={number}/>
      <Header text="Numbers" />
      <Content displayPersons={displayPersons} />
    </div>
  )
}

export default App
