import React from 'react';
import './Cockpit.css';

const CockPit = (props) => {
    
    const classes = [];
    let btnClass = '';

    if(props.showPersons) {
        btnClass = 'red'
    }

    if (props.persons.length <= 2) {
      classes.push('red');
    }

    if (props.persons.length <= 1) {
      classes.push('bold');
    }

    return (
    <div className='cockpit'>
        <h1>Hi I'm a React App</h1>
        <p className={classes.join(' ')}>Hi I'm a React App</p>
        <button className={btnClass} onClick={props.clicked}>Toggle names</button>
    </div>       
    );
};

export default CockPit;