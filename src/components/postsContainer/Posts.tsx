import {FC, useEffect, useState} from "react";
import {IPost} from "../../interfaces/PostInterface";
import {postService} from "../../services/PostService";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;
import {post} from "axios";
import {Post} from "./Post";

const Posts :FC= () => {

    const [posts, setPosts] = useState<IPost[]>([])

    useEffect(() => {
        postService.getAll()
            .then(responce => {
                const postsArray: IPost[]= responce.data.posts;
                setPosts(postsArray);
            })
            .catch(error=> {
                console.error("Помилка отримання постів:", error);
            })
    }, []);

    return (
        <div>
            {posts.map((post:IPost) =>(
                <Post key={post.id}
                    post={post} />
            ))}
        </div>
    );
};

export {Posts};