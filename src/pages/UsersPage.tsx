import {Outlet} from "react-router-dom";
import UsersComponent from "../components/usersComponents/UsersComponent";

const UsersPage = () => {
    return (
        <div>
            <UsersComponent/>
            <hr/>
            <Outlet/>
        </div>
    );
};

export default UsersPage;