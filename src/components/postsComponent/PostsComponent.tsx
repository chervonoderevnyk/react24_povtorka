
import {IPostModel} from "../../models/IPostModel";
import Post from "./Post";
import {FC} from "react";

interface IProps{
    posts: IPostModel[]}

const PostsComponent:FC<IProps> = ({posts}) => {

    // if (posts.length === 0) {
    //     return <div>loading...</div>;
    // }
    return (
        <div>
            {posts.map(post =>
                <Post key={post.id}
                      post={post}/>)}
        </div>
    );
};

export default PostsComponent;