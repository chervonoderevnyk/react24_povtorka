import React, {FC} from "react";
import {CartsModel} from "../../mogels/Carts.model";
import {requests} from "../../services/Dummyjson.api.service";
import Cart from "../cart/Cart";

interface IProps {
    carts: CartsModel[]};

const Carts:FC<IProps> = ({carts}) => {

    // const [cartsUser, setCartsUser] = useState<CartsModel[]>([]);

    // useEffect(() => {
    //     requests.carts.getAllCarts().then(value => setCarts(value.data.carts));
    // }, []);

    return (
        <div>

            {carts.map((value: CartsModel) => (
                <Cart key={value.id}
                      id={value.userId}
                      products={value.products}/>
            ))}

        </div>
    );
};

export default Carts;