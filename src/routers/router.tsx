import {createBrowserRouter} from "react-router-dom";
import {MainLaoute} from "../laoutes/MainLaoute";

export const router = createBrowserRouter([
    {path: '/', element: <MainLaoute/>}
])

