import React, {Fragment, useState} from 'react';

import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
    const [users, setUsers] = useState([]);

    const onAddUserHandler = (userObj) => {
        setUsers(prevState => [userObj, ...prevState]);
    }

    const onDeleteUser = userId => {
        setUsers(prevState => prevState.filter(user => user.id !== userId));
    }

    return (
        <Fragment>
            <AddUser onAddUser={onAddUserHandler}/>
            <UsersList users={users} onDeleteUser={onDeleteUser}/>
        </Fragment>
    );
}

export default App;
