import React, {useState} from 'react';
//We import the necesary component css
import './Expenses.css';
//We can import other components into components...
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2021')
    const filterChangeHandler = selectedYear =>{
        setFilteredYear(selectedYear);
    };
    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
              {/* We use map function to render an ExpenseItem for each value in the
              expense array. In this case "expense" is how we call each single eement in the array*/}
              {props.items.map(expense => (
              <ExpenseItem
               title ={expense.title}
               amount={expense.amount}
               date = {expense.date}/>
               ))}
        </Card>
    )
}

export default Expenses;