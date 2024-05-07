import {FC} from "react";
import styles from './Product.module.css'

export interface IProductProps {
    "id"?: number,
    "title"?: string,
    "description"?: string,
    "price"?: number,
    "discountPercentage"?: number,
    "rating"?: number,
    "stock"?: number,
    "brand"?: string,
    "category"?: string,
    "thumbnail"?: string,
    "images"?: string[]
}

const Product:FC<IProductProps> = ({id,
                                       title,
                                       description,
                                       price,
                                       discountPercentage,
                                       rating,
                                       stock,
                                       brand,
                                       thumbnail,
                                       category,
                                       images}) => {
    return (
        <div className={styles.productStile}>
            <h2>{id}. {title}</h2>
            <p>{description}</p>
            <h2>{price}. {discountPercentage}. {rating}. {stock}. {brand}. {thumbnail}. {category}</h2>
            {images && images.map((image, index) => (
                <img key={index} src={image} alt={title} />
                ))}
        </div>
    );
};

export default Product;