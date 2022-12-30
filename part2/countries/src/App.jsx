import React, { useState, useEffect } from 'react'
import axios from 'axios'

const DisplayCountry = ({ country }) => {
  return (
    <>
      <h1>{country.name.common}</h1>
      <p>capital {country.capital}</p>
      <p>area {country.area}</p>

      <p><b>languages</b></p>
      <ul>
        {Object.values(country.languages)
          .map(value =>
            <li key={value}> {value} </li>)}
      </ul>
    </>
  )
}

const Display = ({ data }) => {
  if (data.length > 10) {
    return (
      <div>too many elements</div>
    )
  }
  else if (data.length <= 10 && data.length > 1) {
    return (
      <>
        {data.map(d => <p>{d.name.common}</p>)}
      </>
    )
  }
  else if (data.length == 1) {
    return (
      <>
        <DisplayCountry country={data[0]} />
      </>
    )
  }
  else{
    return(
      <p>No element Found</p>
    )
  }

}

const App = () => {
  const [filter, setFilter] = useState('')
  const [data, setData] = useState([])
  const [displayData, setDisplayData] = useState([]);

  const hook = () => {
    axios
      .get(`https://restcountries.com/v3.1/all`)
      .then(res => {
        setData(res.data);
        setDisplayData(res.data)
      })
  }
  useEffect(hook, [])

  const handleFilterChange = (e) => {
    setFilter(e.target.value)
    const regex = new RegExp(filter, 'i')
    const filteredData = data.filter(p => p.name.common.match(regex));
    setDisplayData(filteredData)
  }

  return (
    <div>
      <div>
        find countries
        <input value={filter} onChange={handleFilterChange} />
      </div>
      <Display data={displayData} />
    </div>
  )
}

export default App