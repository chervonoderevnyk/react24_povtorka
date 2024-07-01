import {createBrowserRouter} from "react-router-dom";

 export const router = createBrowserRouter([
     {path: '/',
     element: <MainLayout/>,
     errorElement: <h2>what are you doing mann?!</h2>,
     children: [
         {index: true, element: <HomePage/>},
         {path: '/cars', element: <CarsPage/>}
     ]}
])