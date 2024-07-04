import {CarComponent} from "./CarComponent";
import {FC, useEffect, useState} from "react";
import {ICarPaginatedModel} from "../models/ICarPaginatedModel";
import {carService} from "../services/ApiService";
import {ICarWithAuthMode} from "../models/ICarWithAuthMode";

interface IProps{
    cars: ICarWithAuthMode[]
}

const CarsComponent:FC<IProps> = ({cars}) => {



    return (
        <div>
            {cars.map(car => <CarComponent key={car.id} car={car}/>)}
            {/*{cars.map(car => <div key={car.id}> {car.id} {car.brand} </div> )}*/}
        </div>
    );
};

export {CarsComponent};