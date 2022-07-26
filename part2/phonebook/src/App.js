import React,{useState,useEffect} from 'react'
import axios from 'axios';

import Form from './components/Form'
import Header from './components/Header'
import Content from './components/Content'
import Filter from './components/Filter'

import personService from './service/person';
import Notification from './components/Notification';

const App = () => {
  const [allPersons,setAllPersons] = useState([])
  const [displayPersons,setDisplayPersons] = useState([])
  const [name,setName] = useState('')
  const [number,setNumber] = useState('')
  const [filter,setFilter] = useState('')
  const [message,setMessage] = useState({})

  const css='message'

  useEffect(()=>{
    personService.getAll()
          .then(persons=>{
            console.log(persons)
            setAllPersons(persons);
            setDisplayPersons(persons);
          })
  },[])
  const handleNameChange = (e) => {setName(e.target.value);}
  const handleNumberChange = (e) => {setNumber(e.target.value);}
  const handleFilterChange =(e) => {
    if(e.target.value==''){setDisplayPersons(allPersons)}
    else{
      setFilter(e.target.value)
      const regex = new RegExp(filter,'i');
      const filteredPersons = allPersons.filter((person=>person.name.match(regex)));
      setDisplayPersons(filteredPersons)
    }
  }

  const addPerson = (e) => {
    e.preventDefault();
    const array = allPersons.filter(persons=>persons.name==name)
    console.log(array)
    if(name==''||number==''){}
    else if (array.length > 0){
      const persontoAdd= array[0]
      const n = {name,number,id:persontoAdd.id}
      if(window.alert(`${persontoAdd.name} is already added to the phonebook,replace old number with ${number}`)){
        personService.update(persontoAdd.id,n)
        .catch((error) => {
          setMessage({message: error.response.data.error,className: 'error'})
          setTimeout(()=>{
            setMessage({})
          },1000)
        })
        
      }
      setName('')
      setNumber('')
      setMessage({message:`Updated ${name}`,className:'success'})
      setTimeout(() => {
              setMessage({})
              }, 1000)
    }
    else{
      const n = {name,number,id:allPersons[allPersons.length-1].id+1}
      personService.create(n)
            .then(res=>{
              setDisplayPersons(allPersons.concat(n));
              setAllPersons(allPersons.concat(res));
              setName('')
              setNumber('')
              setMessage({message:`Added ${name}`,className:'success'})
              setTimeout(() => {
                setMessage({})
              }, 1000)
            })
            .catch((error) => {
              setMessage({message: error.response.data.error,className: 'error'})
              setTimeout(()=>{
                setMessage({})
              },1000)
            })
      
     }
    

  }

  const deletePerson = (id) =>{
    const personF = allPersons.filter(p => p.id === id)
    if(window.confirm(`Delete ${personF[0].name}`)){
      personService.remove(personF[0].id)
      .catch((error) => {
        setMessage({message: error.response.data.error,className: 'error'})
        setTimeout(()=>{
          setMessage({})
        },1000)
      })
      setAllPersons(allPersons.filter(person=>person.id != id))
      setDisplayPersons(displayPersons.filter(person=>person.id != id))
      setMessage(
       {message: `${personF[0].name} was successfully deleted`,className:'success'}
      )
      setTimeout(() => {
        setMessage({})
      }, 1000)
    }
  }

  return (
    <div>
      <Header text="Phonebook" />
      <Notification notify={message}/>
      <Filter onChange={handleFilterChange} value={filter}/>
      <Header text="add a new " />
      <Form onSubmit={addPerson} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} name={name} number={number}/>
      <Header text="Numbers" />
      <Content displayPersons={displayPersons} deletPerson={deletePerson}/>
    </div>
  )
}

export default App
