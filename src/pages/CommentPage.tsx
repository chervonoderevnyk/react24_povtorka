import {useLocation} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {commentApiService} from "../services/ApiService";
import {ICommentModel} from "../models/ICommentModel";
import CommentComponent from "../components/commentsConponent/CommentComponent";

const CommentPage = () => {
    const location = useLocation();
    const item = location.state?.post;

    const [comments, setComments] = useState<ICommentModel[]>([]);

    useEffect(() => {
        if (item) {
            commentApiService.getCommentsOfPost(item.id)
                .then(value => setComments(value.data));
        } else {
            commentApiService.getAllComments()
                .then(value => setComments(value.data));
        }
    }, [item]);

    return (
        <div>
            <CommentComponent comments={comments} />
        </div>
    );
};

export default CommentPage;
