import React,{useState} from 'react'

const Button = ({handleClick,text}) =>{
  return(
    <button onClick={handleClick}>{text}</button>
  )
}

const StatisticLine = ({value,text}) =>{
  return(
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({good,bad,neutral}) => {
  const total = good+bad+neutral;
  const average = (good-bad)/total;
  const positive = good/total;
  if(total==0){
    return(
      <>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </>
    )
  }
  return(
    <>
      <h1>statistics</h1>
      <table>
      <tbody>
      <StatisticLine value={good} text="good" />
      <StatisticLine value={neutral} text="neutral" />
      <StatisticLine value={bad} text="bad" />
      <StatisticLine value={total} text="total" />
      <StatisticLine value={average} text="average" />
      <StatisticLine value={positive} text="positive" />
      </tbody>
      </table>
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