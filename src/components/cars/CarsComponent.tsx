import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";

import {carService} from "../../services/ApiService";
import {CarPaginatedModel} from "../../models/CarPaginatedModel";
import {CarComponent} from "./CarComponent";
import {PaginationComponent} from "../PaginationComponent";

;

const CarsComponent = () => {

    const [query, setQuery] = useSearchParams();

    const [userCars, setUserCars] = useState<CarPaginatedModel>({
        total_items: 0,
        total_pages: 0,
        next: null,
        prev: null,
        items: []
    })

    useEffect(() => {
        carService.getCars(query.get('page') || '1').then(value => {
            if (value) {
                setUserCars(value)
            }
        })
    }, [query]);


    return (
        <div>
            {userCars?.items.map(car =>
            <CarComponent key={car.id} car={car}/>)}
            <PaginationComponent prev={userCars.prev} next={userCars.next}/>
        </div>
    );
};

export {CarsComponent};