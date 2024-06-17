import axios, {AxiosResponse} from "axios";

import {IUserModel} from "../models/IUserModel";
import {IPostModel} from "../models/IPostModel";
import {ICommentModel} from "../models/ICommentModel";

 let axiosInstans = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
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
     },

     getPostsOfUser: (userId: string): Promise<AxiosResponse<IPostModel[]>> =>{
         return axiosInstans.get(`/users/${userId}/posts`)
     }
 }

 const commentApiService ={
     getAllComments: ():Promise<AxiosResponse<ICommentModel[]>> => {
         return axiosInstans.get('/comments')
     },

     getCommentsOfPost: (postId:string): Promise<AxiosResponse<ICommentModel[]>> =>{
         return axiosInstans.get(
             `/posts/${postId}/comments`
             // `/posts/comments?${postId}`
             // `/comments?postId=${postId}`
         )
     }
 }

export {
     userApiService,
     postApiService,
     commentApiService
}