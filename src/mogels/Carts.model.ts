import CartProducts from "./CartProducts";

export interface CartsModel {
    id?: number,
    products?: CartProducts[],
    total?: number,
    discountedTotal?: number,
    userId?: number,
    totalProducts?: number,
    totalQuantity?: number
}
