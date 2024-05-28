import {FC, useEffect, useState} from "react";
import {CommentsResponceModel} from "../../mogels/Comments.Responce.model";
import {getAllComments} from "../../services/Comment.api.service";
import {CommentModel} from "../../mogels/Comment.model";
import React from "react";
import CommentComponent from "../comment/Comment.Component";
import {requests} from "../../services/Dummyjson.api.service";

interface IProps {
    comments: CommentModel[];
};

const CommentsComponent:FC<IProps> = ({comments}) => {

    // const [comments, setComments] = useState<CommentModel[]>([])

    // useEffect(() => {
    //         getAllComments()
    //             .then((value: CommentsResponceModel) => setComments([...value.comments]));
    // }, []);


    return (
        <div>
            {
                comments.map((comment: CommentModel) =>
                    <CommentComponent key={comment.id}
                                      id={comment.id}
                                      postId={comment.postId}
                                      body={comment.body}
                                      user={comment.user}
                    />)
            }
        </div>
    );
};

export default CommentsComponent;