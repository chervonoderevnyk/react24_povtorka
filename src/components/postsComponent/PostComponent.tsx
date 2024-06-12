import {FC, useEffect, useState} from "react";

import {IPostModel} from "../../models/IPostModel";
import Post from "./Post";

interface IProps{
    posts: IPostModel[]}

const PostComponent:FC<IProps> = ({posts}) => {

    // if (posts.length === 0) {
    //     return <div>loading...</div>;
    // }
    return (
        <div>
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export {PostComponent};