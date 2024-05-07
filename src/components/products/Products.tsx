import {FC, useEffect, useState} from "react";
import Product, {IProductProps} from "../product/Product";

const Products:FC = () => {

    const [products, setProducts] = useState<IProductProps[]>([]);

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(({products}) => {setProducts(products)});
    }, []);

    return (
        <div>
            {products.
              map(({id, title, description, rating, discountPercentage, price, thumbnail, stock, category, brand, images}:IProductProps) =>
                (<Product key={id}
                          id={id}
                          title={title}
                description={description}
                price={price}
                discountPercentage={discountPercentage}
                rating={rating}
                stock={stock}
                brand={brand}
                thumbnail={thumbnail}
                category={category}
                images={images}
                />))}
        </div>
    );
};

export default Products;