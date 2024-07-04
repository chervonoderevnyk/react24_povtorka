import {CarsComponent} from "../compoments/CarsComponent";
import {useEffect, useState} from "react";
import {ICarPaginatedModel} from "../models/ICarPaginatedModel";
import {carService} from "../services/ApiService";

const CarsPage = () => {


    const [cars, setCars] = useState<ICarPaginatedModel[]>([]);

    useEffect(() => {
        carService.getCars().then(value => {
        // console.log(value?.items)

                    if (value) {
                        setCars(value.items);
                    }
                })
            }, []);

    return (
        <div>
            <CarsComponent/>
        </div>
    );
};

export {CarsPage};