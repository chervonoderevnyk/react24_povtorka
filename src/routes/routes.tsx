import {createBrowserRouter, RouteObject} from "react-router-dom";
import App from "../App";
import {UserPage} from "../pages/userPages/UserPage";
import {PostsPage} from "../pages/postPages/PostsPage";
import {UsersPage} from "../pages/userPages/UsersPage";
import {PostPage} from "../pages/postPages/PostPage";

const routes: RouteObject[] = [
    {
        path: '', element: <App/>, children: [
            {path: 'users', element: <UsersPage/>},
            {path: 'posts', element: <PostsPage/>},
            {path: 'users/:id', element: <UserPage/>},
            {path: 'posts/:userId', element: <PostPage/>}
        ]
    }
];

export const router = createBrowserRouter(routes)

