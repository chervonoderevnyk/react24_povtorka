import axios, {AxiosResponse} from "axios";
import {IUserModel} from "../models/IUserModel";
import {IPostModel} from "../models/IPostModel";
import {ICommentModel} from "../models/ICommentModel";
import {BaseUrl} from "../constants/Urls";

let axiosInstance= axios.create({
        baseURL: BaseUrl,
        headers: {"Content-Type": "application/json: charset=UTF-8"}
    });

const ApiServices= {
     userApiService : {

        getAllUsers: (): Promise<AxiosResponse<IUserModel[]>> => {
            return axiosInstance.get("/users");
        },
    },

    postApiService : {

        getAllPosts: (): Promise<AxiosResponse<IPostModel[]>> => {
            return axiosInstance.get("/posts")
        }
    },

    commentsApiService : {
        getAllComments: (): Promise<AxiosResponse<ICommentModel[]>> => {
            return axiosInstance.get("/comments")
        }
    }
}

export {ApiServices}
