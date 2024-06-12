import {PostComponent} from "../components/postsComponent/PostComponent";
import {useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {IPostModel} from "../models/IPostModel";
import {postApiService} from "../services/ApiService";

const PostsPage = () => {

    const {id}= useParams();
    const [posts, setPosts] = useState<IPostModel[]>([]);

    useEffect(() => {
        if (id) {
            postApiService.getPostsOfUser(id)
                .then(value => setPosts(value.data.posts))
        } }, [id]);

    return (
        <div>
            <PostComponent posts={posts}/>
        </div>
    );
};

export {PostsPage};