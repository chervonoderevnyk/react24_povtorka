import {CarWithAuth} from "./CarWithAuth";

export interface CarPaginated{
    total_items: number,
    total_pages: number,
    prev:	string,
    next:	string,
    items: CarWithAuth[]
}