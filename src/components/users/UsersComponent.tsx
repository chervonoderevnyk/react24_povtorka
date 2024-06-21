import {useEffect, useState} from "react";
import {IUserModel} from "../../models/IUserModel";
import {ApiServices} from "../../services/ApiServices";
import {UserComponent} from "./UserComponent";

const UsersComponent = () => {

    const [users, setUsers] = useState<IUserModel[]>([])

    useEffect(() => {
        ApiServices.userApiService.getAllUsers()
            .then(value => setUsers(value.data))
    }, []);

    return (
        <div>
            {users.map(user =>
            <UserComponent key={user.id}
                           user={user}/>
            )}
        </div>
    );
};

export {UsersComponent};