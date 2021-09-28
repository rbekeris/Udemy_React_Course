import React, {useState} from 'react';
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);
    //This function will handle the data received from the form submission
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setIsEditing(false);
    };

    const startEditingHandler = () => {
        setIsEditing(true);
    }

    const stopEditingHandler = () => {
        setIsEditing(false);
    }
        return (
        <div className="new-expense">
            {!isEditing && <button onClick = {startEditingHandler} >  Add New Expense</button>}
            {/* our custom components can also incorporate a function that we pass as props to the child component
            We will use this function in our child function to pass data back to the parent component*/}
            {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler}/>}
        </div>
        );
};

export default NewExpense;