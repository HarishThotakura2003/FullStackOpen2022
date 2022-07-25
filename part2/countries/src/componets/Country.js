import React,{useState,useEffect} from 'react'
import Weather from './Weather'
import axios from 'axios'

const Country = ({country}) => {
  const [weather,setWeather] = useState({})
  const access_key=process.env.REACT_APP_API_KEY
  const lat = country.capitalInfo.latlng[0]||country.latlng[0]
  const lon = country.capitalInfo.latlng[1]||country.latlng[1]
  const address =('https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&appid='+access_key)
  useEffect(()=>{
      axios.get(address)
           .then(res=>{setWeather(res.data)})
  },[])

  return (
    <div>
        <h1>{country.name.common}</h1>
        <p>capital {country.capital}</p>
        <p>area {country.area}</p>
        <b>languages</b>
        <ul>
            {Object.keys(country.languages).map((k,i) =>
                <li key={i}>{country.languages[k]}</li>
                )}
        </ul>
        <img src={country.flags.png} />

        <h2>Weather in {country.capital}</h2>
        <Weather weather={weather}/>
    </div>
  )
}

export default Country