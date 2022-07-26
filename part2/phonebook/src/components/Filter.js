import React from 'react';

const Filter = ({onChange,value}) =>{
    return(
        <div>
            filter shown here <input value={value} onChange={onChange} />
        </div>
    )
}

export default Filter;