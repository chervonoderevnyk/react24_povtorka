import {Outlet, useLocation, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {IPostModel} from "../models/IPostModel";
import {postApiService} from "../services/ApiService";
import PostsComponent from "../components/postsComponent/PostsComponent";

const PostsPage = () => {

    const {id}= useParams();
    const location =useLocation();
    console.log(location);

    const [posts, setPosts] = useState<IPostModel[]>([]);

    useEffect(() => {
        if (id) {
            postApiService.getPostsOfUser(id)
                .then(value => setPosts(value.data));
        } else {
            postApiService.getAllPosts()
                .then(value => setPosts(value.data));
        }
    }, [id]);

    return (
        <div>
            <PostsComponent posts={posts}/>
            <br/>
            <Outlet/>
        </div>
    );
};

export {PostsPage};