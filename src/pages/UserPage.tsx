import {UsersComponent} from "../components/users/UsersComponent";
import {Outlet} from "react-router-dom";

const UserPage = () => {
    return (
        <div>
            <UsersComponent/>
            <Outlet/>
        </div>
    );
};

export {UserPage};