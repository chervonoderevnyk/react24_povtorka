import {useAddDispatch} from "../../slices/store";
import {useEffect} from "react";
import {postActions} from "../../slices/PostsSlice";
import {PostsComponent} from "../../components/postsContainer/PostsComponent";

const PostsPage = () => {

    let dispatch = useAddDispatch();

    useEffect(() => {
        dispatch(postActions.loadPosts())
    }, []);

    return (
        <div>
            <PostsComponent/>
        </div>
    );
};

export {PostsPage};