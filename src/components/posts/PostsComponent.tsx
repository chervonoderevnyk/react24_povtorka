import {useEffect, useState} from "react";
import {IPostModel} from "../../models/IPostModel";
import {ApiServices} from "../../services/ApiServices";
import {PostComponent} from "./PostComponent";
import {useLocation, useParams} from "react-router-dom";

const PostsComponent = () => {

    const {id}= useParams()
    const location = useLocation()
    console.log(location)

    const [posts, setPosts] = useState<IPostModel[]>([])

    useEffect(() => {
        if (id) {
            ApiServices.userApiService.getPostOfUser(id)
                .then(value => setPosts(value.data))
        } else {
            ApiServices.postApiService.getAllPosts()
                .then(value => setPosts(value.data))
        }
    }, [id]);

    return (
        <div>
            {posts.map(post =>
            <PostComponent key={post.id} post={post}/>
            )}
        </div>
    );
};

export {PostsComponent};