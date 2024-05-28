import {CommentsResponceModel} from "../mogels/Comments.Responce.model";

const getAllComments = ():Promise<CommentsResponceModel> => {
    return fetch('https://dummyjson.com/comments')
        .then(value => value.json())
}

export {
    getAllComments
}