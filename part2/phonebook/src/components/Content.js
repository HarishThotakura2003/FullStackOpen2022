import React from 'react'
import Person from './Person'

const Content = ({displayPersons,deletPerson}) => {
  return (
    <>
    
    {displayPersons.map(person=><Person key={person.id}person={person} deletePerson={deletPerson}/>)}
    
    </>
  )
}

export default Content