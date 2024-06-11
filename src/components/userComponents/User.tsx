import {FC, PropsWithChildren} from "react";
import {IUserModel} from "../../models/IUserModel";

// interface IProps extends PropsWithChildren {
//     user: IUserModel
// }

const User :FC<IUserModel>= ({id,lastName, firstName}) => {

    // const {id, lastName, firstName} = user;

    return (
        <div>
            <div>{id} {firstName} {lastName}</div>
            <hr/>
        </div>
    );
};

export {User};