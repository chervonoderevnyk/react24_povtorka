import {HairModel} from "./Hair.Model";

export interface IUserProps {
    id: number,
    firstName: string,
    lastName: string,
    maidenName?: string,
    age: number,
    gender?: string,
    email: string,
    phone?: number,
    username?: string,
    password?: string,
    birthDate?: string,
    image?: string,
    bloodGroup?: string,
    height?: number,
    weight?: number,
    eyeColor?: number,
    hair?: HairModel,
    domain?: string,
    ip?: string,
    address?: {
        address?: string,
        city?: string,
        coordinates?: {
            lat?: number,
            lng?: number
        },
        postalCode?: number,
        state?: string
    },
    macAddress?: string,
    university?: string,
    bank?: {
        cardExpire?: string,
        cardNumber?: number,
        cardType?: string,
        currency?: string,
        iban?: string
    },
    company?: {
        address?: {
            address?: string,
            city?: string,
            coordinates?: {
                lat?: number,
                lng?: number
            },
            postalCode?: number,
            state?: string
        },
        department?: string,
        name?: string,
        title?: string
    },
    ein?: string,
    ssn?: string,
    userAgent?: string
}
