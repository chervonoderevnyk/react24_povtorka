import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "../layouts/MainLayout";
import {HomePage} from "../pages/HomePage";
import {UserPage} from "../pages/UserPage";
import {PostPage} from "../pages/PostPage";
import {CommentPage} from "../pages/CommentPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        errorElement: <h2>what are you doing man???</h2>,
        children: [
            {index:true, element: <HomePage/>},
            {path: '/users', element:<UserPage/>,
                children: [
                    {path: ':id', element: <PostPage/>}
                ]
            },
            {path: '/posts', element:<PostPage/>,
                children: [
                    // {path: ':id', element: <CommentPage/>},
                    {path: ':postId/comments', element: <CommentPage/>}
                ]
            },
            {path: '/comments', element:<CommentPage/>},
        ]
    }
])

