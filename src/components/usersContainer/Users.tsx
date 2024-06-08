import {FC, useEffect, useState} from "react";
import {IUser} from "../../interfaces/UserInterface";
import {userService} from "../../services/UserService";
import {User} from "./User";

const Users:FC<IUser[]> = () => {

    const [users, setUsers] = useState<IUser[]>([])

    useEffect(() => {
        userService.getAll().then(value => setUsers(value.data))
    }, []);

    return (
        <div>
            {users.map((user:IUser) => (<User key={user.id}
                                              id={user.id}
                                             lastname={user.lastName}
                                             age={user.age}
                                             email={user.email}
                                             // user={user}
            />))}
        </div>
    );
};

export {Users};