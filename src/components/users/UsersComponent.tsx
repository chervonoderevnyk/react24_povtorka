import {useEffect, useState} from "react";
import {IUserModel} from "../../models/IUserModel";
import {ApiServices} from "../../services/ApiServices";

const UsersComponent = () => {

    const [users, setUsers] = useState<IUserModel[]>([])

    useEffect(() => {
        ApiServices.userApiService.getAllUsers()
            .then(value => setUsers(value.data))
    }, []);

    return (
        <div>
            {users.map(user = )}
        </div>
    );
};

export {UsersComponent};