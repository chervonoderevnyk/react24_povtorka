import {FC} from "react";
import {CarWithAuthModel} from "../../models/CarWithAuthModel";

interface IProps {
    car: CarWithAuthModel
}

const CarComponent:FC<IProps> = ({car}) => {

    return (
        <div>
            {car.id}. {car.brand} ={car.price}
        </div>
    );
};

export {CarComponent};