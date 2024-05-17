import {AddressCompanyModel} from "./Address.company.model";

export interface CompanyModel{
    address?:AddressCompanyModel,
    department?: string,
    name?: string,
    title?: string
}