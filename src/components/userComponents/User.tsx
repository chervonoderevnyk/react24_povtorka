import {FC, PropsWithChildren} from "react";
import {IUserModel} from "../../models/IUserModel";

interface IProps extends PropsWithChildren {
    user: IUserModel
}

const User :FC<IProps>= ({user}) => {

    const {id, lastName, age} = user;

    return (
        <div>
            <div>id: {id}</div>
            <div>lastName: {lastName}</div>
            <div>age: {age}</div>
        </div>
    );
};

export {User};