import {IUserProps} from "./User.model";

export interface CommentModel {
    body?: string,
    id?: number,
    postId?: number,
    user?: IUserProps
}