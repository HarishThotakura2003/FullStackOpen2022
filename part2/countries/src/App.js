import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Filter from './componets/Filter'
import Content from './componets/Content'

const App = () => {
  const [countries,setCountries] = useState([])

  const onQueryChange = (e) => {
    axios.get("https://restcountries.com/v3.1/name/"+e.target.value)
         .then((res)=>{setCountries(res.data)})
  };

  return (
    <div>
      <Filter onChange={onQueryChange}/>
      <Content countries={countries} />
    </div>
  )
}

export default App