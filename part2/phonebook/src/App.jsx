import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    {id: 1,name: 'Harish Thotakura',number:69696869 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handleNameChange = (e) => {
    setNewName(e.target.value)
  }

  const handleNumberChange =(e) =>{
    setNewNumber(e.target.value)
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
      setPersons(persons.concat(newPerson));
    }

  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>name :<input value={newName} onChange={handleNameChange} /></div>
        <div>number :<input value={newNumber} onChange={handleNumberChange} /></div>
        <button type='submit'>add</button>
      </form>

      <h2>Numbers</h2>
      {persons.map(p => <p>{p.name} {p.number}</p>)}
    </div>
  )
}

export default App