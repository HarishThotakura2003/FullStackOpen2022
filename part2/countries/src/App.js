import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Filter from './componets/Filter'
import Content from './componets/Content'

const App = () => {
  const [query,setQuery] = useState('')
  const [countries,setCountries] = useState([])

  const queryChange = (e) => {
    axios.get("https://restcountries.com/v3.1/name/"+e.target.value)
         .then((res)=>{setCountries(res.data)})
    setQuery(e.target.value)
    
    console.log(countries)
  };

  return (
    <div>
      <Filter onChange={queryChange} value={query}/>
      <Content countries={countries} />
    </div>
  )
}

export default App