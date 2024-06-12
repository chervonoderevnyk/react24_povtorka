import {createBrowserRouter} from "react-router-dom";

import {MainLayout} from "../layout/MainLayout";
import {HomePage} from "../pages/HomePage";
import {UsersComponent} from "../components/usersComponents/UsersComponent";
import {PostComponent} from "../components/postsComponent/PostComponent";
import {CommentComponent} from "../components/commentsConponent/CommentComponent";

const router = createBrowserRouter([
    {path:'/',element: <MainLayout/>,
    children: [
        {index: true, element: <HomePage/>},
        {path:'users', element: <UsersComponent/>},
        {path:'posts', element: <PostComponent/>},
        {path:'comments', element: <CommentComponent/>}

    ]}
])

export {
    router
}