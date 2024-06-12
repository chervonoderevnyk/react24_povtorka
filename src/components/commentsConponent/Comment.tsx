import {FC} from "react";
import {ICommentModel} from "../../models/ICommentModel";

const Comment:FC<ICommentModel> = ({id,body, postId}) => {
    return (
        <div>
            <div>{id}. {body} - postId: {postId}</div>
            <hr/>
        </div>
    );
};

export {Comment};