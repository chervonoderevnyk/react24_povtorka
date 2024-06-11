import {IPost} from "../interfaces/PostInterface";
import {apiService} from "./ApiService";
import {urls} from "../constants/Urls";
import {IRes} from "../types/ResType";

const postService = {
    getAll: (): IRes<IPost[]> => apiService.get(urls.posts)
}

export {
    postService
}