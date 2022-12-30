import React, { useState, useEffect } from 'react'
import CountryInfo from './CountryInfo'

const Show = ({ country }) => {
    if (country != '') {
        return (<CountryInfo country={country} />)
    }
    else {
        return <></>
    }
}


const Country = ({ data, filter, country, setCountry }) => {

    const handleShow = (country) => {
        setCountry(country)
    }

    if (data.length > 10) { return <>Too many Matches,specify another filter</> }
    else if (data.length <= 0) { return <>No Matches</> }
    else if (data.length == 1) { return <CountryInfo country={data[0]} /> }
    else {
        return (<>
            {data.map(d =>
                <p>
                    {d.name.common}
                    <button onClick={() => { handleShow(d) }}>show</button>
                </p>
            )}
            <Show country={country} />
        </>)
    }
}

export default Country