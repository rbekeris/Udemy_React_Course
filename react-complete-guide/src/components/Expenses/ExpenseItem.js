//We import the necesary component css
import './ExpenseItem.css';
//We can import other components into components...
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import React, { useState } from 'react';

//First react componenet
//A React component is just a JS function

function ExpenseItem(props) {
    const [title, setTitle] = useState(props.title);
    
    const clickHandler = () => {
        setTitle('Updated!');
        console.log(title);
    };
    return (
        //Custom components must be configured to support "extra css" -while in-built components support them out of the box
        <Card className="expense-item">
            <ExpenseDate date={props.date}></ExpenseDate>
            <div className="expense-item__description">
                {/* This div no longer takes 'props.title' because it is handled by the useState React HOOK*/}
                <h2>{title}</h2>
                <div className="expense-item__price">{props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button> 
        </Card>
    )
}

export default ExpenseItem;