import {FC} from "react";
import {ICommentModel} from "../../models/ICommentModel";

interface IProps{
    comment: ICommentModel
}

const Comment:FC<IProps> = ({comment}) => {

    return (
        <div>
            <div>{comment.id}.
                {comment.name} -
                postId:{comment.postId}
            </div>
        </div>
    );
};

export default Comment;