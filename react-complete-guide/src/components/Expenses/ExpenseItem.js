//We import the necesary component css
import './ExpenseItem.css';
//We can import other components into components...
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import React from 'react';

//First react componenet
//A React component is just a JS function

function ExpenseItem(props) {
    return (
        //Custom components must be configured to support "extra css" -while in-built components support them out of the box
        <Card className="expense-item">
            <ExpenseDate date={props.date}></ExpenseDate>
            <div className="expense-item__description">
                {/* This div no longer takes 'props.title' because it is handled by the useState React HOOK*/}
                <h2>{props.title}</h2>
                <div className="expense-item__price">{props.amount}</div>
            </div> 
        </Card>
    )
}

export default ExpenseItem;