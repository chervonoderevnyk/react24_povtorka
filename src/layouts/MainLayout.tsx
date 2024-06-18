import {Header} from "../components/Header";
import {Outlet} from "react-router-dom";
import {Footer} from "../components/Footer";

const MainLayout = () => {
    return (
        <div>
            <Header/>
            <hr/>
            <Outlet/>
            <hr/>
            <Footer/>
        </div>
    );
};

export {MainLayout};