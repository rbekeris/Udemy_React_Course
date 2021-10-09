import React from 'react';
import Card from '../UI/Card';
import classes from './UserList.module.css';

const UserList = props =>{
    //we fetch props users object
    //for each member of the object we return
    //name and age inside separeate list component
    return (
    <Card className = {classes.users}>
    <ul>
        {props.users.map(user => 
        <li key={user.id} >{user.name} ({user.age}) years old</li>)}
    </ul>
    </Card>)
};

export default UserList;
