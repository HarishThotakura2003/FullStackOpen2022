import React from 'react'
import Person from './Person'

const Content = ({displayPersons}) => {
  return (
    <>
    
    {displayPersons.map(person=><Person key={person.id}person={person}/>)}
    
    </>
  )
}

export default Content