import {PostsComponent} from "../components/posts/PostsComponent";
import {Outlet} from "react-router-dom";

const PostPage = () => {
    return (
        <div>
            <PostsComponent/>
            <hr/>
            <Outlet/>
        </div>
    );
};

export {PostPage};