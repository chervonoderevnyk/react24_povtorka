import {useEffect, useState} from "react";
import {IUser} from "../../interfaces/UserInterface";
import {userService} from "../../services/UserService";

const Users = () => {

    const [users, setUsers] = useState<IUser[]>()

    useEffect(() => {
        userService.getAll().then(({}=> setUsers(users))
    }, []);

    return (
        <div>
            Users
        </div>
    );
};

export {Users};