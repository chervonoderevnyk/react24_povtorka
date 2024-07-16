import {useAppSelector} from "../../slices/store";
import {PostComponent} from "./PostComponent";

const PostsComponent = () => {

    const {posts} = useAppSelector(
        state => state.postSlice);

    return (
        <div>
            {posts.map(post => <PostComponent key={post.id} post={post}/>)}
        </div>
    );
};

export {PostsComponent};