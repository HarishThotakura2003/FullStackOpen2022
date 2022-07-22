import { useState } from 'react'

const Button = ({text,onClick}) =>{
  return(
    <button onClick={onClick} >
      {text}
    </button>
  )
}

const StatisticsLine = ({text,value}) =>{
  return(<>
      <tr><td>{text}</td><td>{value}</td></tr>
        </>
  )
}

const Statistics = ({good,neutral,bad}) =>{
  if(good+bad+neutral===0){return(
    <>
    <p>No feedback given </p>
    </>
  )}
  else{
    return(
      <>
      <table>
          <StatisticsLine text="good" value={good} />
          <StatisticsLine text="neutral" value={neutral} />
          <StatisticsLine text="bad" value={bad} />
          <StatisticsLine text="all" value={good+neutral+bad} />
          <StatisticsLine text="average" value={(good-bad)/(good+bad+neutral)} />
          <StatisticsLine text="positve" value={(good/(good+bad+neutral))+" %"} />
        </table>
      </>
    )
  }
}

const Header = ({text}) =>{
  return(
    <h1>{text}</h1>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <>
      <Header text="give feedback" />
      <Button text="good" onClick={()=>{setGood(good+1)}} />
      <Button text="neutral" onClick={()=>{setNeutral(neutral+1)}} />
      <Button text="bad" onClick={()=>{setBad(bad+1)}} />
      <Header text="statistics" />
      <Statistics good={good} neutral={neutral} bad={bad} />      
    </>
  )
}

export default App