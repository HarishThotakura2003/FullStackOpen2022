import React,{useState} from 'react'

const Header =({text}) =>{
  return(
    <h2>{text}</h2>
  )
}

const Person =({name,number})=>{
  return(
    <>
    <p>{name}: {number}</p>
    </>
  )
}

const Form = ({onSubmit,name,number}) =>{
  return(
    <>
    <form onSubmit={onSubmit}>
    <div>
        name: <input onChange={name}/>
      </div>
      <div>
        number: <input onChange={number}/>
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
    [{name:'Arto Hellas ',number:'040-1234567'}]
    )

  const [name,setName] = useState('')
  const [number,setNumber] = useState('')
  const handleNameChange = (e) => {setName(e.target.value);}
  const handleNumberChange = (e) => {setNumber(e.target.value);}

  const submit = (e) => {
    e.preventDefault();
    const n = {
      name:name,
      number:number,
    }
    if (persons.some(person=>person.name==n.name)){
      alert(`${n.name} is already added to phonebook`)
    }
    else{
      setPersons(persons.concat(n))
      setName('')
      setNumber('')
    }
  }
  

  return (
    <div>
      <Header text="Phonebook" />
      <Form onSubmit={submit} name={handleNameChange} number={handleNumberChange}/>
      <Header text="Numbers" />
      {persons.map(person=><Person name={person.name} number={person.number}/>)}
    </div>
  )
}

export default App
