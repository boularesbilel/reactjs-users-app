import React from 'react';

import Card from "../UI/Card";
import classes from "./UsersList.module.css";

const UsersList = (props) => {

    const onDeleteUserHandler = (userId) => {
        props.onDeleteUser(userId);
    }
    if(props.users.length === 0) {
        return <></>;
    }
    return (
        <Card className={classes.users}>
            <ul>
                {props.users.map(user => <li onClick={() => onDeleteUserHandler(user.id)} key={user.id}>{user.username} ({user.age} years old)</li>)}
            </ul>
        </Card>
    );
}

export default UsersList;