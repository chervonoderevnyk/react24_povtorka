import React, {FC} from "react";
import {CommentModel} from "../../mogels/Comment.model";

// interface IProps{
//     comment:CommentModel;
// };

const CommentComponent:FC<CommentModel> = ({id,
                                           postId,
                                           body,
                                           user
}) => {
    return (
        <div>
            <div>{id} *
                {postId} *
                {body} ---
                {user?.id}
                {user?.username}</div>
        </div>
    );
};

export default CommentComponent;