import {CoordinatesCompanyModel} from "./Coordinates.company.model";

export interface AddressCompanyModel{
    address?: string,
    city?: string,
    coordinates?: CoordinatesCompanyModel,
    postalCode?: number,
    state?: string
}