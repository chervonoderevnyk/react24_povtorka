import axios, {AxiosResponse} from "axios";
import {IUserModel} from "../models/IUserModel";

 let axiosInstans = axios.create({
    baseURL: "https://dummyjson.com",
    headers: {}
});

 const userApiService = {
     getAllUsers: ():Promise<AxiosResponse<IUserModel[]>> => {
         return axiosInstans.get("/users");
     },
     getUserById: (userId: number):Promise<AxiosResponse<IUserModel>> => {
         return axiosInstans.get(`/users/${userId}`);
     }
 }

export {
     userApiService
}