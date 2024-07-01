import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "../layouts/MainLayout";
import {AuthPage} from "../pages/AuthPage";
import {CarsPage} from "../pages/CarsPage";

 export const router = createBrowserRouter([
     {path: '/',
     element: <MainLayout/>,
     errorElement: <h2>what are you doing mann?!</h2>,
     children: [
         {index: true, element: <AuthPage/>},
         {path: '/cars', element: <CarsPage/>}
     ]}
])