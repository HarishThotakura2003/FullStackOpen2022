import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Filter from './Components/Filter';
import Country from './Components/Country';
import CountryInfo from './Components/CountryInfo';




const App = () => {
  const [allData,setAllData] = useState([]);
  const [filter,setFilter] = useState('');
  const [displayData,setDisplayData] = useState([]);
  const [country,setCountry] = useState('');
  

  const hook = () =>{
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response)=>{
        setDisplayData(response.data)
        setAllData(response.data)
      })
  }
  useEffect(hook,[])

  const handleFilterChange = (e) =>{
    setFilter(e.target.value);
    const regex = new RegExp(filter,'i');
    const filteredData = allData.filter(country => country.name.common.match(regex));
    setDisplayData(filteredData);
    if(filter==''){setDisplayData(allData)}
  }

  return (
    <div>
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <Country data={displayData} filter={filter} country={country} setCountry={setCountry}/>
    </div>
  )
}

export default App