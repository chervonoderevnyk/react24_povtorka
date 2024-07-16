import {useParams} from "react-router-dom";
import {useAddDispatch, useAppSelector} from "../../slices/store";
import {useEffect} from "react";
import {userActions} from "../../slices/UserSlice";

const UserPage = () => {

    let {id} = useParams();

    const dispatch = useAddDispatch();

    const {user} = useAppSelector(state => state.userSlice);

    useEffect(() => {
        dispatch(userActions.loadUserById(id))
    }, [id]);

    return (
        <div>
            {user &&  user.email}
        </div>
    );
};

export {UserPage};