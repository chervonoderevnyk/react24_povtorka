import {CarWithAuthModel} from "./CarWithAuthModel";
import {PaginatedModel} from "./PaginatedModel";

export interface CarPaginatedModel {
    total_items: number;
    total_pages: number;
    prev: PaginatedModel | null;
    next: PaginatedModel | null;
    items: CarWithAuthModel[];
}