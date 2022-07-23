import React,{useState} from 'react'

const Header =({text}) =>{
  return(
    <h2>{text}</h2>
  )
}

const Person =({name})=>{
  return(
    <>
    <p>{name}</p>
    </>
  )
}

const Form = ({input,onSubmit,onInput}) =>{
  return(
    <>
    <form onSubmit={onSubmit}>
      <div>
        name: <input value={input} onChange={onInput}/>
      </div>
      <div>
        <button type='submit'>add</button>
      </div>
    </form>
    </>
  )
}

const App = () => {
  const [persons,setPersons] = useState(
    [{name:'Arto Hellas '}]
    )
  const [input,setInput] = useState('')
  
  const inputChange = (event) => {
    setInput(event.target.value)
  }

  const addNumber=(event) => {
    event.preventDefault()
    const newNumber={
      name:input
    }
    setPersons(persons.concat(newNumber))
    
  }

  return (
    <div>
      <Header text="Phonebook" />
      <Form input={input} onSubmit={addNumber} onInput={inputChange}/>
      <Header text="Numbers" />
      {persons.map(person=><Person name={person.name} />)}
    </div>
  )
}

export default App
