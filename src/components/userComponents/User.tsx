import {FC, PropsWithChildren} from "react";
import {IUserModel} from "../../models/IUserModel";

interface IProps extends PropsWithChildren {
    user: IUserModel
}

const User :FC<IProps>= ({user}) => {

    const {id, lastName, firstName} = user;

    return (
        <div>
            <div>{id} {firstName} {lastName}</div>
            <hr/>
        </div>
    );
};

export {User};