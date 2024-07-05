import {CarsComponent} from "../components/cars/CarsComponent";
import {Outlet} from "react-router-dom";

const CarsPage = () => {

    return (
        <div>
            <CarsComponent/>
            <Outlet/>
        </div>
    );
};

export {CarsPage};