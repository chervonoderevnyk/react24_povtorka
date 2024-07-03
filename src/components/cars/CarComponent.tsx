import {FC} from "react";
import {CarWithAuth} from "../../models/CarWithAuth";

interface IProps {
    car: CarWithAuth
}

const CarComponent:FC<IProps> = ({car}) => {

    return (
        <div>
            {car.id}. {car.brand} ={car.price}
        </div>
    );
};

export {CarComponent};