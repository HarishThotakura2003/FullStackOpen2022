import React,{useState,useEffect} from 'react'

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

  const [selected,setSelected] = useState(0);
  const [votes,setVotes] = useState(new Array(7).fill(0));
  const [max,setMax] = useState(-1);


  const random = (length) =>{
    return Math.floor(Math.random() * length);
  }

  const updateVotes = () =>{
    let v = [...votes];
    v[selected]+=1;
    setVotes(v);
  }

  const handleMaxVotes = () => {
    setMax(votes.indexOf(Math.max(...votes)));
  }

  useEffect(()=>{
    handleMaxVotes();
  })

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <button onClick={updateVotes}>vote</button>
      <button onClick ={() => {setSelected(random(anecdotes.length))}}>next anecdotes</button>
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[max]}</p>
    </div>
  )
}

export default App