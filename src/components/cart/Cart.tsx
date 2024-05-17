import React, {FC} from "react";
import {CartsModel} from "../../mogels/Carts.model";
import CartProducts from "../../mogels/CartProducts";

const Cart:FC<CartsModel> = ({
                    id,
                    products
                             }) => {

    return (
        <div>
               <h2>{id}</h2>
               <ul>
                   {products && products.map((product: CartProducts) => (
                       <li key={product.id}>
                           <p>{product.title}</p>
                           <p>price: {product.price}$</p>
                           <img src={product.thumbnail} alt={product.title}/>
                       </li>
                   ))}
               </ul>
        </div>
    );
};

export default Cart;