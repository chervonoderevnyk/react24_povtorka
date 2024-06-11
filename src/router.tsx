import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "./layout/MainLayout";
import {HomePage} from "./pages/HomePage";
import {UsersComponent} from "./components/userComponents/UsersComponent";

const router = createBrowserRouter([
    {path:'/',element: <MainLayout/>,
    children: [
        {index: true, element: <HomePage/>},
        {path:'users', element: <UsersComponent/>}
    ]}
])

export {
    router
}