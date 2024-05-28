import React, {FC} from "react";
import {IPostModel} from "../../mogels/Post.model";

// interface IProps {
//     post: IPostModel;
//     // chooseComment: (id: number)=> void;
// }

type IPropsType = IPostModel & {liftComments?: (postId:number)=> void};

const Post:FC<IPropsType> = ({
                                 id,
                                 title,
                                 liftComments
                             }) => {

    function onClickComments() {
        if (liftComments) {
            liftComments(id);
        }
    }

    return (
        <div>

            <div>{id},
                {title}
                <div>
                    <button onClick={onClickComments}>chooseComment</button>
                </div>
                <hr/>
            </div>
        </div>
    );
};

export default Post;