import {FC} from "react";
import {ICar} from "../../inerface/carInterface";

interface IProps {
    car: ICar
}

const Car:FC<IProps> = ({car}) => {

const {id, brand, year,price} = car;

    return (
        <div>
            <div>id: {id} -brand: {brand}- year: {year} - price: {price}</div>
        </div>
    );
};

export {Car};