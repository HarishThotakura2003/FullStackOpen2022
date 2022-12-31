import React,{useEffect,useState} from 'react'
import axios from 'axios'

const CountryInfo = ({country}) => {
  const [weather,setWeather] = useState('')
  const API_KEY = "eaf8562eb747d88ddc197f3b50281bfb"
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${country.capital}&appid=${API_KEY}`
  const hook = () =>{
    axios.get(url)
      .then((response)=>{
        console.log(country.flag)
        setWeather(response.data)
      })
  }
  useEffect(hook,[])
  if(weather!=''){
    return (
      <>
          <h1>{country.name.official}</h1>
          <p>capital {country.capital}</p>
          <p>area {country.area}</p>
          <p><b>languages</b></p>
          <ul>
          {Object.values(country.languages).map(l=><li>{l}</li>)}
          </ul>
          <img src={country.flags.png} alt="Country flag"></img>
          <h2>Weather in {country.capital}</h2>
          <p>Temperature {(weather.main.temp-273.15).toFixed(2)} Celcius </p>
          <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`} />
          <p>wind {weather.wind.speed} m/s</p>
      </>
    )
  }
    return(
      <>
        <h1>{country.name.official}</h1>
          <p>capital {country.capital}</p>
          <p>area {country.area}</p>
          <p><b>languages</b></p>
          <ul>
          {Object.values(country.languages).map(l=><li>{l}</li>)}
          </ul>
          <img src={country.flag} width="200" alt={`${country.name} flag`} />
      </>
    )
  
}

export default CountryInfo