import {FC, PropsWithChildren} from "react";
import {IUserModel} from "../../models/IUserModel";

const User :FC<IUserModel>= ({id,lastName, firstName}) => {

    return (
        <div>
            <div>{id}. {firstName} {lastName}</div>
            <hr/>
        </div>
    );
};

export {User};