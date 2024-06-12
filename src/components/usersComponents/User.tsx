import React, {FC} from "react";
import {IUserModel} from "../../models/IUserModel";
import {Link} from "react-router-dom";

interface IProps {
    user: IUserModel;
}

const User :FC<IProps>= ({user}) => {

    return (
        // <div>
            <div>
                <Link to={user.id.toString()}>{user.id}. {user.firstName} {user.lastName}</Link>
                </div>
            // <hr/>
        /*</div>*/
    );
};

export default User;