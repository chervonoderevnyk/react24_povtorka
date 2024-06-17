import React,{FC, useEffect, useState} from "react";

import {IUserModel} from "../../models/IUserModel";
import {userApiService} from "../../services/ApiService";
import User from "./User";

const UsersComponent:FC = () => {

    const [users, setUsers] = useState<IUserModel[]>([]);

    useEffect(() => {
        userApiService.getAllUsers()
            .then(value => setUsers(value.data));
    }, []);

    return (
        <div>
            {users.map(user =>
            <User key={user.id}
                  user={user}/>)}
        </div>
    );
};

export default UsersComponent;
