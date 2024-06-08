import {useEffect, useState} from "react";
import {IUser} from "../../interfaces/UserInterface";
import {userService} from "../../services/UserService";
import {User} from "./User";

const Users = () => {

    const [users, setUsers] = useState<IUser[]>([])

    useEffect(() => {
        userService.getAll().then((value) => setUsers(value.data))
    }, []);

    return (
        <div>
            {users.map((user:IUser) => <User key={user.id}
                                             user={user}/>)}
        </div>
    );
};

export {Users};