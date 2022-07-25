import React from 'react'

const Weather = ({weather}) => {
    if (Object.keys(weather).length==0){return <></>}
    else{
    console.log(weather)
    const png ="https://openweathermap.org/img/wn/"+weather.weather[0].icon+"@2x.png"
    console.log(png)
  return (
    <>
        <p>temperature {(weather.main.temp-273.15).toFixed(2)} Celcius</p>
        <img src={png} />
        <p>wind {weather.wind.speed} m/s</p>
    </>

  )
    }
}

export default Weather