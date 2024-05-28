import React, {FC, useEffect, useState} from "react";
import {IPostModel} from "../../mogels/Post.model";
import Post from "../post/Post";
import {requests} from "../../services/Dummyjson.api.service";
import {CommentModel} from "../../mogels/Comment.model";
import CommentsComponent from "../comments/Comments.Component";

interface IProps {
    posts: IPostModel[]
        // & {liftComments?: (postId: number) => void};
}

const Posts:FC<IProps> = ({posts
                              // ,liftComments
}) => {

    // const [posts, setPosts] = useState<IPostModel[]>([]);
    //
    // useEffect(() => {
    //     requests.posts.getAllPosts().then(({data}) => setPosts(data.posts));
    // }, []);

    const [comments, setComments] = useState<CommentModel[]>([]);

    const liftComments = (postId: number) =>{
        requests.commentsPostId.getCommentsOfPost(postId).then((value)=>{
            setComments(value.data.comments)
        })
    };

    return (
        <div>
            {/*{posts.map((post) => (<Post key={post.id} post ={post}/>))}*/}

            {/*{posts.map((post:IPostModel) => (<div>{post.title}</div>))}*/}
            {posts.map((post: IPostModel) => (
                <Post key={post.id}
                      id={post.id}
                      title={post.title}
                      liftComments={liftComments}
                />
            ))}
            <CommentsComponent comments={comments}/>

        </div>
    );
};

export default Posts;