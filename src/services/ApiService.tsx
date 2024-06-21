import axios, {AxiosResponse} from "axios";
import {IUserModel} from "../models/IUserModel";

axios.create({
        baseURL: 'https://jsonplaceholder.typicode.com/',
        headers:
    });

const userApiService = {

    getAllUsers: (): Promise<AxiosResponse<IUserModel[]>> => {
        return axios.get("/users");
    },

    }
