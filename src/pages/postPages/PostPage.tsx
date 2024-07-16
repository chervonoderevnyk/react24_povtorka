import {useParams} from "react-router-dom";
import {useAddDispatch, useAppSelector} from "../../slices/store";
import {useEffect} from "react";
import {postActions} from "../../slices/PostsSlice";

const PostPage = () => {

    let {userId} = useParams();

    const dispatch = useAddDispatch();

    const {posts} = useAppSelector(state => state.postSlice);

    useEffect(() => {
        if (userId) {
            dispatch(postActions.loadPostsByUserId(userId))
        }
    }, [userId, dispatch]);

    return (
        <div>
            <h1>Posts by User {userId}</h1>
            {posts.map(post => (
                <div key={post.id}>
                    <p>{post.id}: {post.title}</p>
                </div>
            ))}
        </div>
    );
};

export {PostPage};