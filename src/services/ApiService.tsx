import axios from "axios";
import {TokenObtainPair} from "../models/TokenObtainPair";
import {TokenRefresh} from "../models/TokenRefresh";

const axiosInstance = axios.create({
    baseURL: 'http://owu.linkpc.net/carsApi/v2',
    headers: {}
});

const authService = {
    authentication: async (authData: TokenObtainPair): Promise<boolean> => {
        let response;
        try {
            response =
                await axiosInstance.post<TokenRefresh>('/auth', authData);
            localStorage.setItem('tokenPair', JSON.stringify(response.data));

        } catch (e) {
            console.log(e);

        }
        return !!(response?.data?.access && response?.data?.refresh);
    },
    refresh:() => {}
}

// const carsService

export {
    authService,
    // carsService
}