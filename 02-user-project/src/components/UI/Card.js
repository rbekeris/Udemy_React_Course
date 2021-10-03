import React from 'react';
import classes from './Card.module.css';

const Card = props => {
    //We Need to configure our custom component to accept any incoming
    //Css class names via props as well as the Card.module.css provided above
    //We do that via providing template literal to the className property
    return <div className={`${classes.card} ${props.className}`}>{props.children}</div>;
};

export default Card;