import {CommentModel} from "./Comment.model";

export interface CommentsResponceModel {
    comments: CommentModel[],
    limit?: number,
    skip?: number
    total?: number,
}