import {FC, PropsWithChildren} from "react";
import {IUser} from "../../interfaces/UserInterface";

interface IProps extends PropsWithChildren {
user: IUser
}

const User: FC<IProps> = () => {
    return (
        <div>
            User
        </div>
    );
};

export {User};