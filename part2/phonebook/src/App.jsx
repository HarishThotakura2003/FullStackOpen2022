import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([])
  const [displayPersons,setDisplayPersons] = useState(persons)
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter,setFilter] = useState('')

  const handleNameChange = (e) => {
    setNewName(e.target.value)
  }

  const handleNumberChange =(e) =>{
    setNewNumber(e.target.value)
  }

  const handleFilterChange = (e) =>{
    setFilter(e.target.value)
    const regex = new RegExp(filter,'i')
    const filteredPersons = (persons.filter(p=>p.name.match(regex)))
    setDisplayPersons(filteredPersons)
    if(filter==''){setDisplayPersons(persons)}
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const person = persons.filter(p => p.name === newName);
    if (person.length > 0) {
      window.alert(`${newName} is already added to phonebook`)
    }
    else {
      const newPerson = {
        id: persons.length + 1,
        name: newName,
        number : newNumber,
      }
      setDisplayPersons(persons.concat(newPerson))
      setPersons(persons.concat(newPerson))
      
    }

  }

  return (
    <div>
      <h2>Phonebook</h2>
      <di>filter shown with <input value={filter} onChange={handleFilterChange}/></di>
      <form onSubmit={handleSubmit}>
        <div>name :<input value={newName} onChange={handleNameChange} /></div>
        <div>number :<input value={newNumber} onChange={handleNumberChange} /></div>
        <button type='submit'>add</button>
      </form>

      <h2>Numbers</h2>
      {displayPersons.map(p => <p>{p.name} {p.number}</p>)}
    </div>
  )
}

export default App