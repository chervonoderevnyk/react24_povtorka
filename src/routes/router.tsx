import {createBrowserRouter} from "react-router-dom";

import {MainLayout} from "../layout/MainLayout";
import {HomePage} from "../pages/HomePage";
import {PostComponent} from "../components/postsComponent/PostComponent";
import {CommentComponent} from "../components/commentsConponent/CommentComponent";
import UsersPage from "../pages/UsersPage";
import {PostsPage} from "../pages/PostsPage";

export  const router = createBrowserRouter([
    {path:'/',
        element: <MainLayout/>,
        errorElement: <h1>what are you doing maaaan???</h1>,
    children: [
        {index: true, element: <HomePage/>},
        {path:'users', element: <UsersPage/>,
            children:[
                {path:':id', element: <PostsPage/>}
                ]},
        {path:'posts', element: <PostComponent/>},
        {path:'comments', element: <CommentComponent/>}

    ]}
])
