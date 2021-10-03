import React from 'react';

import classes from './Button.module.css';

const Button = props => {
    //type set via props and fallback is set to 'button' with || operator
    //onClick = provided via props
    //content can be set via props too
    return (
    <button className = {classes.button}
    type={props.type || 'button'}
    onClick={props.onClick}>
        {props.children}
    </button>
    );
};

export default Button;