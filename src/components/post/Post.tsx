import React, {FC} from "react";
import {IPostModel} from "../../mogels/Post.model";

// interface IProps {
//     post: IPostModel;
// }
//
// type IPropsType = IProps & {children?:React.ReactNode};

const Post:FC<IPostModel> = ({
                                 id,
                                 title
                             }) => {
    return (
        <div>

            <div>{id},
                {title}
            <hr/>
            </div>
        </div>
    );
};

export default Post;