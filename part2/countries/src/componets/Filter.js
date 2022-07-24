import React from 'react'

const Filter = ({onChange,value}) => {
  return (
    <div>find countries<input onChange={onChange} value={value}/></div>
  )
}

export default Filter