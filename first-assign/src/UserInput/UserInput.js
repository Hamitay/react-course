import React from 'react';
import './UserInput.css'

const userInput = (props) => {
    return (
        <div className='redClass'>
            <input type='text' onChange={props.changeEvent} value={props.username}/>
        </div>
    );
}

export default userInput;