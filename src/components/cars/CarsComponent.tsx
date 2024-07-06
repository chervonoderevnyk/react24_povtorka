import {useEffect, useState} from "react";
import {useNavigate, useSearchParams} from "react-router-dom";

import {authService, carService} from "../../services/ApiService";
import {CarPaginatedModel} from "../../models/CarPaginatedModel";
import {CarComponent} from "./CarComponent";
import {PaginationComponent} from "../PaginationComponent";
import {AxiosError} from "axios";

const CarsComponent = () => {

    const navigate = useNavigate();
    const [query, setQuery] = useSearchParams();
    const [userCars, setUserCars] = useState<CarPaginatedModel>({
        total_items: 0,
        total_pages: 0,
        next: null,
        prev: null,
        items: []
    })

    useEffect(() => {

     const getCarsData= async ()=>{

         try {
             const response =await carService.getCars(query.get('page') || '1');
             if (response) {
                 setUserCars(response);
             }

         } catch (e) {
             const axiosError= e as AxiosError
             if (axiosError && axiosError?.response?.status === 401) {
                 try {
                     await authService.refresh();
                 } catch (e) {
                     return navigate('/');
                 }

                 const response = await carService.getCars(query.get('page') || '1');
                 if (response) {
                     setUserCars(response)
                 }
             }
         }
     }
        getCarsData();
    },[query])

    return (
        <div>
            {userCars?.items.map(car =>
            <CarComponent key={car.id} car={car}/>)}
            <PaginationComponent prev={userCars.prev} next={userCars.next}/>
        </div>
    );
};

export {CarsComponent};