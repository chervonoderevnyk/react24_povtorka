import {FC, PropsWithChildren} from "react";
import {IUser} from "../../interfaces/UserInterface";

interface IProps extends PropsWithChildren {
user: IUser
}

const User: FC<IProps> = ({user}) => {

    const {id, lastName,age, email} = user;

    return (
        <div>
            <div>id: {id}</div>
            <div>lastName: {lastName}</div>
            <div>age: {age}</div>
            <div>email: {email}</div>
        </div>
    );
};

export {User};