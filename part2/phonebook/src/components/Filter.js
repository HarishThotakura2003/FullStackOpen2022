import React from 'react';

const Filter = ({onChange}) =>{
    return(
        <div>
            filter shown here <input onChange={onChange} />
        </div>
    )
}

export default Filter;