import React,{FC, useEffect, useState} from "react";

import {IUserModel} from "../../models/IUserModel";
import {userApiService} from "../../services/ApiService";
import User from "./User";
import user from "./User";

interface IProps{
    users: IUserModel[]
}

const UsersComponent:FC<IProps> = () => {

    const [users, setUsers] = useState<IUserModel[]>([]);

    useEffect(() => {
        userApiService.getAllUsers()
            .then(value => setUsers(value.data.users));
    }, []);
    

    if (users.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            {users.map(user =>
            <User key={user.id} user={user}/>)}
        </div>
    );
};

export default UsersComponent;

// {users: Array(30), total: 208, skip: 0, limit: 30}
// limit: 30
// skip: 0
// total: 208
// users: (30) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// [[Prototype]]: Object
