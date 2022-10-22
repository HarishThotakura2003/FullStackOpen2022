# Part 1
---
## A . Introduction to React
- To create a React app
```bash
npx create-react-app appName
```
- index.js
```js
import React from 'react';
import ReactDOM from 'react-dom/client'

import App from './App'

ReactDom.createRoot(document.getElementById('root')).render(<App />)
```
- App.jsx
```js
const App = () =>{
	<div>
		<h1>App</h1>
	</div>
}

export default App
```
JSX:
- The layout of react components is mostly written in JSX
- In JSX every tag needs to be closed `<br />`
- Every React Components name must be capitalized
Props : Passing data to components
```jsx
const Hello = (props) =>{
	<div>Hello{props.name}</div>
}

const App = () => {
	<div>
		<Hello name="Harish" />
		<Hello name ="John" />
	</div>
}
```
- Data that is passed onto components is stored in props
---
## B . JavaScript
- Variables
```js
const x = 1; // constant
let x =1 // Variable
```
- Arrays
```js
const t = [1,2,3,4]
const t1 = t.concat(5) //returns new array with array+5
console.log(t.length)

//looping through the array
t.forEach(value=>{
	console.log(value)
})

// Maps change the value of array items
double_t = t.map(value=>{value*2})

//Destruturing
const [first,second,...others] = t
```
- Objects
```js
const obj = {
	name:'Harish'
}
// accessing fields
obj.name
obj['name']

//Adding infor
obj.age = 18
obj['isMale'] = true
```
- Functions
```js
const f = (a,b) => {
	return a*b
}
```
___
## C . Component state, event handlers
- __Component helper Functions :__
```jsx
const Hello = ({name,age}) => {
	const bornYear = () => {
		const yearNow = new Date.getFullYear()
		return yearNow - props.age
	}

	return(
		<div>
			<p> Hello {props.name}, you are {props.age} years old </p>
			<p>S you were probably born in {bornYear()} </p>
		</div>		
	)
}
```
- Here bornYear is a helper function
- __Destructuring :__
```jsx
const {name,year} = props // Destructuring props object
// Taking Destructuring a further step
const Hello =({name,year}) =>{....}
```
- __Stateful Components :__ when a stateful components values changes it rerenders the component
```jsx
import {useState} from 'react'

const App = () => {
	const [counter,setCounter] = useState('')

	setTimeout(()=>{setCounter(counter+1)},1000)

	return(
		<div>{counter}</div>
	)
}
```
- The Counter variable is assigned to initial value of ' '
- The setCounter is a function that can modify counter value
- __Event handling :__
- It accept only functions,function reference no function calls
```jsx
const handleClick = () => {
	console.log('clicked')
}

<button onClick={handleClick} />
```
---
## D . A more Complex state
- Using multiple states
```js
const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)

  return (
    <div>
      {left}
      <button onClick={() => setLeft(left + 1)}>
        left
      </button>
      <button onClick={() => setRight(right + 1)}>
        right
      </button>
      {right}
    </div>
  )
}
```
- Using a single state
```js
const App = () => {
  const [clicks, setClicks] = useState({
    left: 0, right: 0
  })

  const handleLeftClick = () => {
    const newClicks = { 
      left: clicks.left + 1, 
      right: clicks.right 
    }
    setClicks(newClicks)
  }

  const handleRightClick = () => {
    const newClicks = { 
      left: clicks.left, 
      right: clicks.right + 1 
    }
    setClicks(newClicks)
  }

  return (
    <div>
      {clicks.left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {clicks.right}
    </div>
  )
}
```
__Using Arrays as State :__
```js
const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])
  
  const handleLeftClick = () => {    
	  setAll(allClicks.concat('L'))    
	  setLeft(left + 1)  
  }
  const handleRightClick = () => {
	setAll(allClicks.concat('R'))
	setRight(right + 1)  
	}
  return (
    <div>
      {left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {right}
      <p>{allClicks.join(' ')}</p>    </div>
  )
}
```
- Here we are not using push cause it changes the state direcly,We are using concat cause it results in new array
__Rules of Hooks :__ The useState function must not be called inside a loop or a conditional
__Event Handling :__
```js
const App = () => {
  const [value, setValue] = useState(10)

  const handleClick = () =>
    console.log('clicked the button')

  return (
    <div>
      {value}
      <button onClick={handleClick}>button</button>
    </div>
  )
}
```
- Functions that return functions can be used
```js
const App = () => {
  const [value, setValue] = useState(10)

  const hello = (who) => {    const handler = () => {      console.log('hello', who)    }    return handler  }
  return (
    <div>
      {value}
      <button onClick={hello('world')}>button</button>      <button onClick={hello('react')}>button</button>      <button onClick={hello('function')}>button</button>    </div>
  )
}
```
