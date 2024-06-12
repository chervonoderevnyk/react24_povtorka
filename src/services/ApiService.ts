import axios, {AxiosResponse} from "axios";

import {IUserModel} from "../models/IUserModel";
import {IPostModel} from "../models/IPostModel";
import {ICommentModel} from "../models/ICommentModel";

 let axiosInstans = axios.create({
    baseURL: "https://dummyjson.com",
     headers: {"Content-Type": "application/json: charset=UTF-8"}
});

 const userApiService = {
     getAllUsers: ():Promise<AxiosResponse<IUserModel[]>> => {
         return axiosInstans.get("/users");
     },

     getUserById: (userId: number):Promise<AxiosResponse<IUserModel>> => {
         return axiosInstans.get(`/users/${userId}`);
     }
 }

 const postApiService = {
     getAllPosts: (): Promise<AxiosResponse<IPostModel[]>> => {
         return axiosInstans.get('/posts')
     }
 }

 const commentApiService ={
     getAllComments: ():Promise<AxiosResponse<ICommentModel[]>> => {
         return axiosInstans.get('/comments')
     }
 }

export {
     userApiService,
     postApiService,
     commentApiService
}