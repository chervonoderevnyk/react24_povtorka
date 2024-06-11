import React, { FC, useEffect, useState } from "react";
import { IUser } from "../../interfaces/UserInterface";
import { userService } from "../../services/UserService";
import { User } from "./User";

const Users: FC = () => {
    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        userService.getAll()
            .then(response => {
                const usersArray: IUser[] = response.data.users;
                setUsers(usersArray);
            })
            .catch(error => {
                console.error("Помилка отримання користувачів:", error);
            });
    }, []);

    return (
        <div>
            {users.map((user: IUser) => (
                <User key={user.id} user={user} />
            ))}
        </div>
    );
};

export { Users };
