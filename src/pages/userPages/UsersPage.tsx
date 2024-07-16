import {UsersComponent} from "../../components/usersContainer/UsersComponent";
import {useAddDispatch} from "../../slices/store";
import {useEffect} from "react";
import {userActions} from "../../slices/UserSlice";

const UsersPage = () => {

    let dispatch = useAddDispatch();

    useEffect(() => {
        dispatch(userActions.loadUsers())
        // dispatch(userActions.loadUserById())
    }, []);

    return (
        <div>
            <UsersComponent/>
        </div>
    );
};

export {UsersPage};