import React from 'react'

const Country = ({country}) => {
  return (
    <div>
        <h1>{country.name.common}</h1>
        <p>capital {country.capital}</p>
        <p>area {country.area}</p>
        <b>languages</b>
        <ul>
            {Object.keys(country.languages).map(k =>
                <li>{country.languages[k]}</li>
                )}
        </ul>
        <img src={country.flags.png} />
    </div>
  )
}

export default Country