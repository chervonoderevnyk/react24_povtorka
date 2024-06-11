import {FC} from "react";
import {IUserModel} from "../../models/IUserModel";

const User :FC<IUserModel>= ({user}) => {

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