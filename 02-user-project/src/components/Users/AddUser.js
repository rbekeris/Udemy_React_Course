import React, {useState} from 'react';
import Card from '../UI/Card';
import clsases from './AddUser.module.css';
//custom component names start with capital letter
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

const AddUser = props => {
    const [enteredUsername, setEnteredUsername] = useState();
    const [enteredAge, setEnteredAge] = useState();
    const [error, setError] = useState();
    
    const addUserHandler = (event) => {
        event.preventDefault();
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0 ) {
            setError ({
                title: 'invalid input',
                message: 'Please enter a valid name and age.'
            });
            return;
        }
        //we can enforce enteredAge to be evaluated as number with the + sign
        if (+enteredAge < 1) {
            setError ({
                title: 'invalid age',
                message: 'Please enter a valid age (>0).'
            });
            return;
        }

        props.onAddUser(enteredUsername, enteredAge);
        setEnteredUsername('');
        setEnteredAge('');
    };

    const usernameChangeHandler = (event) =>{
        setEnteredUsername(event.target.value);
    };
    const ageChangeHandler = (event) =>{
        setEnteredAge(event.target.value);
    };

    const errorHandler = () => {
        setError(null);
    };

    //If error --> return ErrorModal!
    return (
        <div>
    {error && <ErrorModal title ={error.title} message={error.message} onConfirm={errorHandler}/>}
    <Card className={clsases.input}>
    <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id ="username" type= "text" value= {enteredUsername} onChange={usernameChangeHandler}/>
        <label htmlFor="age">Age (years)</label>
        <input id ="age" type= "number" value= {enteredAge} onChange={ageChangeHandler}/>
        <Button type="submit">Add User</Button>
    </form>
    </Card>
    </div>
    );
};

export default AddUser