import { useState } from 'react'

const Button = ({text,onClick}) =>{
  return(
    <button onClick={onClick} >
      {text}
    </button>
  )
}

const Statistics = ({good,neutral,bad}) =>{
  if(good===0&&neutral===0&&bad===0){return(
    <>
    <p>No feedback given </p>
    </>
  )}
  else{
    return(
      <>
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
        <p>all {good+neutral+bad}</p>
        <p>average {(good-bad)/(good+bad+neutral)}</p>
        <p>positive {good/(good+bad+neutral)} %</p>
      </>
    )
  }
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button text="good" onClick={()=>{setGood(good+1)}} />
      <Button text="neutral" onClick={()=>{setNeutral(neutral+1)}} />
      <Button text="bad" onClick={()=>{setBad(bad+1)}} />
      <h1>statisics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />      
    </div>
  )
}

export default App