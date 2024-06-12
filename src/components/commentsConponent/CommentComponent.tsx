import {FC, useEffect, useState} from "react";
import {ICommentModel} from "../../models/ICommentModel";
import {commentApiService} from "../../services/ApiService";
import {Comment} from "./Comment";

const CommentComponent:FC = () => {

    const [comments, setComments] = useState<ICommentModel[]>([]);

    useEffect(() => {
        commentApiService.getAllComments()
            .then((value)=>{setComments(value.data.comments)})
    }, []);

    if (comments.length === 0) {
        return <div>Loading...</div>
    }

    return (
        <div>
            {comments.map((comment)=> (
                <Comment key={comment.id}
                         id={comment.id}
                         body={comment.body}
                         postId={comment.postId}
            />))}
        </div>
    );
};

export {CommentComponent};