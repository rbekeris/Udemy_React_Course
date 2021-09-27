import React from 'react';
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {
    //This function will handle the data received from the form submission
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    };
        return (
        <div className="new-expense">
            {/* our custom components can also incorporate a function that we pass as props to the child component
            We will use this function in our child function to pass data back to the parent component*/}
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
        </div>
        );
};

export default NewExpense;