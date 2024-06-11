import {FC, useEffect, useState} from "react";
import {IUserModel} from "../../models/IUserModel";
import {userApiService} from "../../services/ApiService";
import {User} from "./User";
import {AxiosResponse} from "axios";

const UsersComponent:FC = () => {
    const [users, setUsers] = useState<IUserModel[]>([]);

    useEffect(() => {
        userApiService.getAllUsers().then((value) => setUsers(value.data.users))
    }, []);

    return (
        <div>
            {users.map((user:IUserModel) => (
                <User key={user.id} user={user}/>))}
        </div>
    );
};

export {UsersComponent};
// {users: Array(30), total: 208, skip: 0, limit: 30}
// limit: 30
// skip: 0
// total: 208
// users: (30) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// [[Prototype]]: Object