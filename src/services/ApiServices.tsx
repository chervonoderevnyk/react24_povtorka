import axios, {AxiosResponse} from "axios";
import {IUserModel} from "../models/IUserModel";
import {IPostModel} from "../models/IPostModel";
import {ICommentModel} from "../models/ICommentModel";

let axiosInstans= axios.create({
        baseURL: 'https://jsonplaceholder.typicode.com',
        headers: {"Content-Type": "application/json: charset=UTF-8"}
    });

const ApiServices= {
     userApiService : {

        getAllUsers: (): Promise<AxiosResponse<IUserModel[]>> => {
            return axiosInstans.get("/users");
        },
    },

    postApiService : {

        getAllPosts: (): Promise<AxiosResponse<IPostModel[]>> => {
            return axiosInstans.get("/posts")
        }
    },

    commentsApiService : {
        getAllComments: (): Promise<AxiosResponse<ICommentModel[]>> => {
            return axiosInstans.get("/comments")
        }
    }
}

export {ApiServices}
