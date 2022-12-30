import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Harish Thotakura' ,id:1 }
  ])
  const [newName, setNewName] = useState('')

  const handleNameChange = (e) => {
    setNewName(e.target.value)
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    const newPerson ={
      name : newName,
      id : persons.length+1
    }
    setPersons(persons.concat(newPerson));
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>name :<input value={newName} onChange={handleNameChange}/></div>
        <button type='submit'>add</button>
      </form>
      <h2>Numbers</h2>
      {persons.map(p => <p>{p.name}</p>)}
    </div>
  )
}

export default App