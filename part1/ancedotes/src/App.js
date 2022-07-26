import { useState } from 'react'

const Header =({text})=>{
  return(
    <h1>{text}</h1>
  )
}

const Winner =({anecdotes,allVotes})=>{
  const highest = Math.max(...allVotes)
  const index=allVotes.indexOf(highest)
  const winner = anecdotes[index]
  if(highest==0){return <p>No Votes Yet</p>}
  else{
    return (
      <>
        <p>{winner}</p>
        <p>has{highest}</p>
      </>
    )
  }
}

const Button = ({text,onClick}) =>{
  return(
    <>
    <button onClick={onClick}>{text}</button>
    </>
  )
}

const Anecdote =({text,votes})=>{
  return(
    <>
    <p>{text}</p>
    <p>has {votes} votes</p>
    </>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
  const [allVotes,setAllVotes] = useState(Array(7).fill(0));
  const [selected, setSelected] = useState(0)

  const handleVoteClick = () => {
    const newAllVotes = [...allVotes]
    newAllVotes[selected] +=1
    setAllVotes(newAllVotes)
  }
  
 const handleAnecdoteClick = () =>{
  const random =Math.floor(Math.random() * anecdotes.length)
  setSelected(random)
 }


  return (
    <>
      <Header text="Anecdote of the day" />
      <Anecdote text={anecdotes[selected]} votes ={allVotes[selected]} />
      <Button text="vote" onClick={handleVoteClick} />
      <Button text= "next anecdote" onClick={handleAnecdoteClick}></Button>
      <Header text="Anecdote with the most votes" />
      <Winner anecdotes={anecdotes} allVotes={allVotes} />
    </>
  )
}

export default App