import {useEffect, useState} from "react";
import {carService} from "../../services/ApiService";
import {CarPaginated} from "../../models/CarPaginated";
import {CarComponent} from "./CarComponent";

const CarsComponent = () => {

    const [userCars, setUserCars] = useState<CarPaginated>()

    useEffect(() => {
        carService.getCars().then(value => setUserCars(value))
    }, []);



    return (
        <div>
            {userCars?.items.map(car =>
            <CarComponent key={car.id} car={car}/>)}
        </div>
    );
};

export {CarsComponent};