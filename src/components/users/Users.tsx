import {FC, useEffect, useState} from "react";

import User from "../user/User";
import {IUserProps} from "../../mogels/UserModel";
import {getAllUsers} from "../../services/users.api.service";

const Users:FC = () => {
    const [users, setUsers] = useState<IUserProps[]>([]);

    useEffect(() => {
        getAllUsers().then(value => setUsers(value.data.users));
    }, []);

    console.log('.');

    return (
        <div>
            {users.map((value: IUserProps) => (
                <User key={value.id}
                       id={value.id}
                       firstName={value.firstName}
                       lastName={value.lastName}
                       maidenName={value.maidenName}
                       age={value.age}
                       gender={value.gender}
                       email={value.email}
                       phone={value.phone}
                       hair={value.hair}
                />))}
        </div>
    );
};

export default Users;