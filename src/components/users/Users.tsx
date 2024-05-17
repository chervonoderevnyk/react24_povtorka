import {FC, useEffect, useState} from "react";

import User from "../user/User";
import {IUserProps} from "../../mogels/User.model";
import {requests} from "../../services/Dummyjson.api.service";

type IPropsType = {lift?:(userId:number)=> void} & {liftCart?:(userId:number)=> void};

const Users:FC<IPropsType> = ({lift,liftCart}) => {

    const [users, setUsers] = useState<IUserProps[]>([]);

    useEffect(() => {
        requests.users.getAllUsers().then(value => setUsers(value.data.users));
    }, []);

    console.log('.');

    return (
        <div>
            {users.map((value: IUserProps) => (
                <User key={value.id}
                       id={value.id}
                       firstName={value.firstName}
                       lastName={value.lastName}
                       email={value.email}
                       phone={value.phone}
                       hair={value.hair}
                      company={value.company}
                      lift={lift}
                      liftCart={liftCart}
                />))}
        </div>
    );
};

export default Users;