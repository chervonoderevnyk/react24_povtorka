import {FC} from "react";

import {ICarWithAuthMode} from "../models/ICarWithAuthMode";

interface IProps {
    car: ICarWithAuthMode
}

const CarComponent:FC<IProps> = ({car}) => {
    return (
        <div>
            {car.id}. {car.brand} = {car.price}
        </div>
    );
};

export {CarComponent};