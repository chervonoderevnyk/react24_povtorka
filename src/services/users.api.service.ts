import axios, {AxiosInstance, AxiosResponse} from "axios";
import {IUserProps} from "../mogels/UserModel";

let axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com',
    headers: {
        "Content-Type": "application/json"
    }
});

const getAllUsers = () => {
   return  axiosInstance.get('/users')
}

export {getAllUsers}

// const getAllUsers = ():Promise<AxiosResponse<IUserProps[]>> => {
//     return  axiosInstance.get('/users')
// }