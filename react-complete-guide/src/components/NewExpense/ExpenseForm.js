import React, {useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    //We can pass the value entered in the form to the state
    //This helps us to "persist" this value independently from the function's life-cycle
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

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
    
    const submitHandler = (event) => {
        //We want to prevent the default form submit behavour that reloads the page
        event.preventDefault();

        //we can refer to all state values and combine them in one object
        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        };
        //Upon form submission we use the function passed to this child component
        //this function is definded in the parent and will handle the data we give it
        //thus enabling the data flow from child to parent
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };
    
    return (
    
    <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className = "new-expense__control">
                <label>Title</label>
                {/* we can bind the value of the form input field to the state!!!!! by simple value={stateValuename} */}
                <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
            </div>
            <div className = "new-expense__control">
                <label>Amount</label>
                <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangehandler}/>
            </div>
            <div className = "new-expense__control">
                <label>Date</label>
                <input type="date" min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={dateChangeHandler} />
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="button" onClick={props.onCancel}>Cancel</button>
            <button type="submit">Add Expense</button>
        </div>
    </form>
    );
};

export default ExpenseForm;