import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "./layouts/MainLayout";
import {UserPage} from "./pages/UserPage";
import {PostPage} from "./pages/PostPage";

const router = createBrowserRouter([
    {path:'', element:<MainLayout/>, children:[
            {path:'users', element:<UserPage/>},
            {path:'users', element:<PostPage/>}
        ]}
])

export {
    router
}