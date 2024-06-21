import {useEffect, useState} from "react";
import {ICommentModel} from "../../models/ICommentModel";
import {ApiServices} from "../../services/ApiServices";
import {CommentComponent} from "./CommentComponent";

const CommentsComponent = () => {

    const [comments, setComments] = useState<ICommentModel[]>([])

    useEffect(() => {
        ApiServices.commentsApiService.getAllComments()
            .then(value => setComments(value.data))
    }, []);

    return (
        <div>
            {comments.map(comment =>
            <CommentComponent key={comment.id} comment={comment}/>
            )}
        </div>
    );
};

export {CommentsComponent};