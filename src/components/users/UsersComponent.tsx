import {useEffect, useState} from "react";
import {IUserModel} from "../../models/IUserModel";
import {ApiServices} from "../../services/ApiServices";

const UsersComponent = () => {

    const [users, setUsers] = useState<IUserModel[]>([])

    useEffect(() => {
        ApiServices.userApiService.getAllUsers(setUsers())
    }, []);

    return (
        <div>
            UsersComponent
        </div>
    );
};

export {UsersComponent};