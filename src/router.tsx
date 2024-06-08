import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./layouts/MainLayout";
import {UserPage} from "./pages/UserPage";
import {PostPage} from "./pages/PostPage";

const router = createBrowserRouter([
    {path:'', element:<MainLayout/>, children:[
            {index:true, element:<Navigate to={'users'}/>},
            {path:'users', element:<UserPage/>},
            {path:'posts', element:<PostPage/>}
        ]}
])

export {
    router
}