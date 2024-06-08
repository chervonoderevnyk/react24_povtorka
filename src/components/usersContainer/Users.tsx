import {useEffect, useState} from "react";
import {IUser} from "../../interfaces/UserInterface";
import {userService} from "../../services/UserService";

const Users = () => {

    const [users, setUsers] = useState<IUser[]>()

    useEffect(() => {
        userService.getAll().then(({value}) => setUsers(value.data.users))
    }, []);

    return (
        <div>
            Users
        </div>
    );
};

export {Users};