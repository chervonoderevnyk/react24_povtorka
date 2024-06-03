import axios from "axios";
import {IPostModel} from "../models/IPostModel";

let axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com',
    headers: { 'Content-Type': 'application/json' }
});

let requests = {
    post: {
        addPost : (post:IPostModel) => {
            return axiosInstance.post('/posts/add', post)
        }
    }
}
export {requests}

