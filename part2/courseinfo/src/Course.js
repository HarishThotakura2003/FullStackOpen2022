import React from 'react'

const Header = (props) => {
    return (
        <h1>{props.course.name}</h1>
    )
}

const Part = (props) => {
    return (
        <p>{props.part.name} {props.part.exercises}</p>
    )
}

const Content = ({course}) => {
    return (
        <>
            {course.parts.map(p =>
                <Part part={p} />
            )}
        </>
    )
}

const Total = ({course}) => {
    return (
        <>
            <p>Number of exercises {
                course.parts.reduce((s,p)=>{
                    return s + p.exercises;
                },0)
            }</p>
        </>
    )
}

const Course = ({ course }) => {
    return (
        <div>
            <Header course={course} />
            <Content course={course} />
            <Total course={course} />
        </div>
    )
}

export default Course