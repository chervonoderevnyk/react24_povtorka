import {useEffect, useState} from "react";
import {IPostModel} from "../../models/IPostModel";
import {ApiServices} from "../../services/ApiServices";
import {PostComponent} from "./PostComponent";

const PostsComponent = () => {

    const [posts, setPosts] = useState<IPostModel[]>([])

    useEffect(() => {
        ApiServices.postApiService.getAllPosts()
            .then(value => setPosts(value.data))
    }, []);

    return (
        <div>
            {posts.map(post =>
            <PostComponent key={post.id} post={post}/>
            )}
        </div>
    );
};

export {PostsComponent};