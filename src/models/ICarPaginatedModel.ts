import {ICarWithAuthMode} from "./ICarWithAuthMode";
import {IPaginatedPage} from "./IPaginatedPage";

export interface ICarPaginatedModel{
    total_items: number;
    total_pages: number;
    // prev: string;
    // next: string;
    prev: IPaginatedPage | null;
    next: IPaginatedPage | null;
    items: ICarWithAuthMode[];

}