import {FC} from "react";
import {ICommentModel} from "../../models/ICommentModel";
import Comment from "./Comment";

interface IProps{
    comments: ICommentModel[]
}

const CommentComponent:FC<IProps> = ({comments}) => {

    return (
        <div>
            {comments.map(comment =>
                <Comment key={comment.id}
                         comment={comment}/>)}
        </div>
    );
};

export default CommentComponent;