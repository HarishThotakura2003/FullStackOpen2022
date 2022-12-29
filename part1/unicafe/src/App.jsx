import React,{useState} from 'react'

const Button = ({handleClick,text}) =>{
  return(
    <button onClick={handleClick}>{text}</button>
  )
}

const Statistics = ({good,bad,neutral}) => {
  const total = good+bad+neutral;
  const average = (good-bad)/total;
  const positive = good/total;
  return(
    <>
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>total {total}</p>
      <p>average {average}</p>
      <p>positive {positive}</p>
    </>
  )
}

const App = () => {
  const [good,setGood] = useState(0);
  const [neutral,setNeutral] = useState(0);
  const [bad,setBad] = useState(0);
  return (
    <>
      <h1>give feedback</h1>
      <Button handleClick={()=>setGood(good+1)} text={"good"} />
      <Button handleClick={()=>setNeutral(neutral+1)} text={"neutral"} />
      <Button handleClick={()=>setBad(bad+1)} text={"bad"} />
      <Statistics good={good} bad={bad} neutral={neutral} />
    </>
    
  )
}

export default App