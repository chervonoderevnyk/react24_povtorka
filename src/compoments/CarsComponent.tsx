import {CarComponent} from "./CarComponent";
import {FC, useEffect, useState} from "react";
import {ICarPaginatedModel} from "../models/ICarPaginatedModel";
import {carService} from "../services/ApiService";

const CarsComponent:FC = () => {


    return (
        <div>
            {/*{cars.map(car => <CarComponent key={car.id} car={car}/>)}*/}
            CarsComp
        </div>
    );
};

export {CarsComponent};