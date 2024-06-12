import {FC, useEffect, useState} from "react";

import {IPostModel} from "../../models/IPostModel";
import {postApiService} from "../../services/ApiService";
import {Post} from "./Post";

const PostComponent:FC = () => {
    const [posts, setPosts] = useState<IPostModel[]>([]);

    useEffect(() => {
        postApiService.getAllPosts()
            .then(value => setPosts(value.data.posts))
    }, []);

    if (posts.length === 0) {
        return <div>loading...</div>;
    }

    return (
        <div>
            {posts.map((post) => (
                <Post key={post.id}
                      id={post.id}
                      title={post.title}
                      body={post.body}/>
            ))}
        </div>
    );
};

export {PostComponent};