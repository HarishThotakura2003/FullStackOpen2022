import React from 'react'

const CountryInfo = ({country}) => {
  return (
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