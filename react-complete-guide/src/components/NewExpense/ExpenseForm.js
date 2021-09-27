import React, {useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
    //We can pass the value entered in the form to the state
    //This helps us to "persist" this value independently from the function's life-cycle
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDatea, setEnteredDate] = useState('');

    //event is passed by browser automatically on change. Big object with many things inside.
    //The interesting part for us is (event.target.value)
    const titleChangeHandler = (event) =>{
        setEnteredTitle(event.target.value);
    };

    const amountChangehandler = (event) =>{
        setEnteredAmount(event.target.value);
    };

    const dateChangeHandler = (event) =>{
        setEnteredDate(event.target.value);
    };
    
    return (
    
    <form>
        <div className="new-expense__controls">
            <div className = "new-expense__control">
                <label>Title</label>
                <input type="text" onChange={titleChangeHandler} />
            </div>
            <div className = "new-expense__control">
                <label>Amount</label>
                <input type="number" min="0.01" step="0.01" onChange={amountChangehandler}/>
            </div>
            <div className = "new-expense__control">
                <label>Date</label>
                <input type="date" min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} />
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
        </div>
    </form>
    );
};

export default ExpenseForm;