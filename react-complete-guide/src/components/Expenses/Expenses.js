import React, {useState} from 'react';
//We import the necesary component css
import './Expenses.css';
//We can import other components into components...
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2021')
    
    const filterChangeHandler = selectedYear =>{
        setFilteredYear(selectedYear);
    };

    //Here we implement filtering for the display
    //To do that we use .filter method which takes a function applied to each array item
    //If the function on the array item returns TRUE, the item is kept in the resulting array
    //Otherwise it is not added to the new array
    const filteredExpenses = props.items.filter(expense =>{
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <Card className="expenses">
            <ExpensesFilter
                selected={filteredYear}
                onChangeFilter={filterChangeHandler}
                />
                <ExpensesChart expenses={filteredExpenses}/>
              <ExpensesList items={filteredExpenses} />
        </Card>
    )
}

export default Expenses;