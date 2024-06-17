import {createBrowserRouter} from "react-router-dom";

import {MainLayout} from "../layout/MainLayout";
import {HomePage} from "../pages/HomePage";
import UsersPage from "../pages/UsersPage";
import {PostsPage} from "../pages/PostsPage";
import CommentPage from "../pages/CommentPage";

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
        {path:'posts', element: <PostsPage/>,
             children:[
                {path: ':postId/comments', element: <CommentPage/>}
                ]},
        {path:'comments', element: <CommentPage/>}
    ]}
])
