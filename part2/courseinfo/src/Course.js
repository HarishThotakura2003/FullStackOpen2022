import React from "react";

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

  export default Course;