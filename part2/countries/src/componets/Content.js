import React from 'react'
import Country from './Country'

const Content =({countries}) =>{
    if(countries.length==1){return <Country country={countries[0]}/>}
    else if(countries.length>10){
        return <p>Too many matches,specify another filter</p>
    }
    else if(countries.length<=10&&countries.length>1){
        return(
        <>
        
            {countries.map(country => <p>{country.name.common}</p>)}
        
        </>
        )
    }
 
}

export default Content