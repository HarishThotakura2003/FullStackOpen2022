import React from 'react'

const Header =({text}) =>{
  return(
    <>
    <h1>{text}</h1>
    </>
  )
}

const Part =({name,exercises})=>{
  return(
    <>
      <p>{name} {exercises}</p>
    </>
  )
}

const Total =({parts}) =>{
  const t = parts.reduce((acc,part)=>{
    return acc+part.exercises;
  },0)
  return(
    <>
    <p><b>total of {t} exercises</b></p>
    </>

  )
}

const Course =({course}) =>{
  return(
    <>
      <Header text={course.name} />
      {course.parts.map(part=>
        <Part id={part.id} name={part.name} exercises={part.exercises} />
        )}
      <Total parts={course.parts} />
    </>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  }
  

  return <Course course={course} />
}

export default App