import {useEffect, useState} from "react";

import {CarsComponent} from "../compoments/CarsComponent";
import {ICarPaginatedModel} from "../models/ICarPaginatedModel";
import {carService} from "../services/ApiService";
import {PaginationComponent} from "../compoments/PaginationComponent";
import {useSearchParams} from "react-router-dom";

const CarsPage = () => {

    const [query, setQuery] = useSearchParams();

    const [carsPaginatedObject, setCarsPaginatedObject] =
        useState<ICarPaginatedModel>({
        items:[],
        next:null,
        prev:null,
        total_items:0,
        total_pages:0
    })

    useEffect(() => {
        carService.getCars(query.get('page') || '1').then(value => {
            if (value) {
                setCarsPaginatedObject(value);
            }
        })
    }, [query]);

    return (
        <div>
            <CarsComponent cars={carsPaginatedObject.items}/>
            <PaginationComponent next={carsPaginatedObject.next} prev={carsPaginatedObject.prev}/>
        </div>
    );
};

export {CarsPage};