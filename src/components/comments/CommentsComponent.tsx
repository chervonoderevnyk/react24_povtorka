import {useEffect, useState} from "react";
import {ICommentModel} from "../../models/ICommentModel";
import {ApiServices} from "../../services/ApiServices";
import {CommentComponent} from "./CommentComponent";
import {useLocation, useParams} from "react-router-dom";

const CommentsComponent = () => {

    // const {id}= useParams()

    const location= useLocation()
    const item = location.state?.post;

    const [comments, setComments] = useState<ICommentModel[]>([])

    useEffect(() => {
        if (item) {
            ApiServices.postApiService.getCommentsOfPost(item.id)
                .then(value => setComments(value.data))
        } else {
            ApiServices.commentsApiService.getAllComments()
                .then(value => setComments(value.data))
        }
        }, [item]);

    return (
        <div>
            {comments.map(comment =>
            <CommentComponent key={comment.id} comment={comment}/>
            )}
        </div>
    );
};

export {CommentsComponent};