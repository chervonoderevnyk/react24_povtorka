import axios, {AxiosError} from "axios";

import {UserDataPair} from "../models/UserDataPair";
import {TokenPair} from "../models/TokenPair";
import {retriveLocalStorageData} from "../helpers/Helpers";
import {CarPaginated} from "../models/CarPaginated";

const axiosInstance = axios.create({
    baseURL: 'http://owu.linkpc.net/carsAPI/v2',
    headers: {}
});


axiosInstance.interceptors.request.use(request => {

    if (localStorage.getItem('tokenPair') && (request.url !== '/auth' && request.url !== '/auth/refresh')) {
        const iTokenObtainPair = retriveLocalStorageData<TokenPair>('tokenPair');
        request.headers.set('Authorization', 'Bearer ' + iTokenObtainPair.access);
    }

    return request;
});

const authService = {
    authentication: async (authData: UserDataPair): Promise<boolean> => {
        let response;
        try {
            response =
                await axiosInstance.post<TokenPair>('/auth', authData);
            localStorage.setItem('tokenPair', JSON.stringify(response.data));

        } catch (e) {
            console.log(e);
        }

        return !!(response?.data?.access && response?.data?.refresh);
    },
    refresh: async (refreshToken: string) => {
        const response = await axiosInstance.post<TokenPair>('/auth/refresh', {refresh: refreshToken});
        localStorage.setItem('tokenPair', JSON.stringify(response.data));
    },
}

const carService = {
    getCars: async () => {

        try {
            const response = await axiosInstance.get<CarPaginated>('/cars');
            return response.data;

        } catch (e) {
            const axiosError = e as AxiosError;

            if (axiosError?.response?.status === 401) {
                const refreshToken = retriveLocalStorageData<TokenPair>('tokenPair').refresh;
                await authService.refresh(refreshToken);
                await carService.getCars();
            }
        }
    }
}

export {
    authService,
    carService
}