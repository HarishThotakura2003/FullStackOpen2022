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

const Content = (props) => {
    return (
        <>
            {props.course.parts.map(p =>
                <Part part={p} />
            )}
        </>
    )
}

const Total = (props) => {
    return (
        <>
            <p>Number of exercises {props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises}</p>
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