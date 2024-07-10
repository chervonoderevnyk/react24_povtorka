import {UserComponent} from "./UserComponent";
import {useStore} from "../../context/Store";

const UsersComponent = () => {

    const {userStore:{allUsers}} = useStore();

    return (
        <div>
            {allUsers.map(user => <UserComponent key={user.id} user={user}/>)}
        </div>
    );
};

export {UsersComponent};