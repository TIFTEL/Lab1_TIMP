import React from 'react';
import classes from "./Button.Module.scss";
const MyButton = ({children, ...props}) => {
    return (
        <button className={classes.myBtn}>
            {children}
        </button>
    );
};

export default MyButton;