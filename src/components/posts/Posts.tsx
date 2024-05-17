import {FC, useEffect, useState} from "react";
import {IPostModel} from "../../mogels/Post.model";
import Post from "../post/Post";
import {requests} from "../../services/Dummyjson.api.service";

interface IProps {
    posts: IPostModel[];
}

const Posts:FC<IProps> = ({posts}) => {

    // const [posts, setPosts] = useState<IPostModel[]>([]);
    //
    // useEffect(() => {
    //     requests.posts.getAllPosts().then(({data}) => setPosts(data.posts));
    // }, []);

    return (
        <div>
            {/*{posts.map((post) => (<Post key={post.id} post ={post}/>))}*/}

            {/*{posts.map((post:IPostModel) => (<div>{post.title}</div>))}*/}
            {posts.map((post: IPostModel) => (
                <Post key={post.id} id={post.id} title={post.title} />
            ))}

        </div>
    );
};

export default Posts;