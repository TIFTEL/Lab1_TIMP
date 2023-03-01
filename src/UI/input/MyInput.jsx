import React from 'react';
import classes from './Input.module.scss'
const MyInput = (props) => {
    return (
        <input className={classes.myInput} {...props}/>
    );
};

export default MyInput;