export default interface CartProducts {
    id: number,
    title: string,
    price: number,
    quantity: number,
    total: number,
    discountPercentage: number,
    discountedPrice: number,
    thumbnail: string
};