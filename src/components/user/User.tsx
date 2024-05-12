import React, {FC} from "react";
import {IUserProps} from "../../mogels/UserModel";
import {HairModel} from "../../mogels/Hair.Model";

const User:FC<IUserProps> = ({
                                 id,
                                 firstName,
                                 lastName,
                                 maidenName,
                             age,
                             gender,
                             email,
                             phone,
                             hair
                           }) => {

    return (
        <div>
            <h2>{id} - {firstName} {lastName}</h2>
            <h3>{maidenName} - {age} - {gender}</h3>
            <h4>{email} - {phone}</h4>
            <div>
                <p>Hair: color: {hair?.color}, type: {hair?.type}</p>
            </div>

            <hr/>
        </div>
    );
};

export default User;