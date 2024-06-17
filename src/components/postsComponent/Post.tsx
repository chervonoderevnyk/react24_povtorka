import React, {FC} from "react";
import {IPostModel} from "../../models/IPostModel";
import {Link, useNavigate} from "react-router-dom";

interface IProps {
    post: IPostModel
}

const Post: FC<IProps> = ({post}) => {
    const navigate = useNavigate();

    const  onClickNavigateHandler= ()=>{
        navigate(`/posts/${post.id}/comments`, { state: {post} });
    }

    return (
        <div>
            <Link to={`/posts/${post.id}/comments`} state={{post}}>
                {post.id}. {post.title}
            </Link>

            <button
                onClick={onClickNavigateHandler}
            >Show comments of this post</button>
        </div>
    );
};

export default Post;
