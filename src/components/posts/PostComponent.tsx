import {FC} from "react";
import {IPostModel} from "../../models/IPostModel";
import {Link} from "react-router-dom";

interface IProps{
    post: IPostModel
}

const PostComponent: FC<IProps> = ({post}) => {
    return (
        <div>
            <Link to={`/posts/${post.id}/comments`} state={{post}}>
                {post.id} {post.title}
            </Link>
        </div>
    );
};

export {PostComponent};