import {FC, useEffect, useState} from "react";
import {IUserModel} from "../../models/IUserModel";
import {userApiService} from "../../services/ApiService";

const UsersComponent:FC = () => {
    const [users, setUsers] = useState<IUserModel[]>([]);

    useEffect(() => {
        userApiService.getAllUsers().then(value=> setUsers(value.data.users))
    }, []);

    return (
        <div>
            {users.map(user => <div key={user.id}>user: {user}</div>)}
        </div>
    );
};

export {UsersComponent};