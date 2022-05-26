import React,{ useEffect } from 'react';
// import { users_data } from '../../DataMocks/users_data';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers, usersListData, inactiveEmployees,activeEmployees } from '../../features/users/usersSlice';
// import { getUsers } from '../../dataService/users/users'
import { UsersDataTable } from './UsersDataTable';

export const Users = () => {

    let users = useSelector(usersListData);
    const dispatch = useDispatch();



    useEffect( () => {
        dispatch(fetchUsers());
    },[dispatch]);

    const allEmployees = () => {
        dispatch(fetchUsers());
    }
    const onlyActive = () => {
        dispatch(activeEmployees());
    }
    const onlyInactive = () => {
        dispatch(inactiveEmployees());
    }

    return (
        <>
            <div>
                <h1> USERS COMPONENT</h1>
            </div>
            <button onClick={ allEmployees }>All employees</button>
            <button onClick={ onlyActive }>Show actives</button>
            <button onClick={ onlyInactive }>Show inactives</button>
            <button onClick={()=> ''}>+ New Employee</button>

            <UsersDataTable userData={users}/>
        </>
    )
}
