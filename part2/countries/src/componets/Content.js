import React,{useState} from 'react'
import Country from './Country'


const Content =({countries}) =>{
    const [display,setDisplay] = useState({})

    if(countries.length==1){return <Country country={countries[0]}/>}
    else if(countries.length==0){return <p>No search query is Entered</p>}
    else if(countries.length>10){return <p>Too many matches,specify another filter</p>}
    else if(countries.length<=10&&countries.length>1){
        if(Object.keys(display).length==0){
            return(
                <>
                    <ul>
                        {countries.map((country,i)=><li key={i}>{country.name.common} <button onClick={()=>setDisplay(country)}>show</button></li>)}
                    </ul>
                </>
            )
        }
       else{
        return(
            <>
                <ul>
                    {countries.map((country,i)=><li key={i}>{country.name.common} <button onClick={()=>setDisplay(country)}>show</button></li>)}
                </ul>
                <Country country={display} />
            </>
        )
       }

    }

}

export default Content