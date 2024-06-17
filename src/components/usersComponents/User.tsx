import React, {FC} from "react";
import {IUserModel} from "../../models/IUserModel";
import {Link, useNavigate} from "react-router-dom";

interface IProps {
    user: IUserModel;
}

const User :FC<IProps>= ({user}) => {

    const navigate = useNavigate();

    return (
            <div>
                <Link
                    to={user.id.toString()}
                    state={{foo:'bar'}}>
                    {user.id}. {user.name} {user.username}
                </Link>

                <button onClick={()=>{
                    navigate(user.id.toString(),
                        {state:{foo:'foobar'}});
                }}>show posts of this user</button>

                </div>
            );
};

export default User;