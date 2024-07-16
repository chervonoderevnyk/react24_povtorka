import {FC} from "react";
import {IUser} from "../../models/IUser";
import {useNavigate} from "react-router-dom";


interface IProps {
    user: IUser

}

const UserComponent:FC<IProps> = ({user}) => {

let navigate = useNavigate()

    return (
        <div>
            {user.id} : {user.name}

            <button onClick={() => {
                navigate(user.id.toString())
            }}
            >details user
            </button>

            <button onClick={() => {
                navigate(`/posts/${user.id}`)
            }}>
                posts of user
            </button>
        </div>
    );
};

export {UserComponent};