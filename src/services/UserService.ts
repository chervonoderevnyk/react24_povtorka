import {IRes} from "../types/ResType";
import {IUser} from "../interfaces/UserInterface";
import {apiService} from "./ApiService";
import {urls} from "../constants/Urls";

const userService= {
    getAll: (): IRes<IUser[]> => apiService.get(urls.users)
}

export {
    userService
}