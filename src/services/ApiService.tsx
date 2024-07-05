import axios, {AxiosError} from "axios";

import {UserDataPairModel} from "../models/UserDataPairModel";
import {TokenPairModel} from "../models/TokenPairModel";
import {retriveLocalStorageData} from "../helpers/Helpers";
import {CarPaginatedModel} from "../models/CarPaginatedModel";

const axiosInstance = axios.create({
    baseURL: 'http://owu.linkpc.net/carsAPI/v2',
    headers: {}
});


axiosInstance.interceptors.request.use(request => {

    if (localStorage.getItem('tokenPair') && (request.url !== '/auth' && request.url !== '/auth/refresh')) {
        const iTokenObtainPair = retriveLocalStorageData<TokenPairModel>('tokenPair');
        request.headers.set('Authorization', 'Bearer ' + iTokenObtainPair.access);
    }

    return request;
});

const authService = {
    authentication: async (authData: UserDataPairModel): Promise<boolean> => {
        let response;
        try {
            response =
                await axiosInstance.post<TokenPairModel>('/auth', authData);
            localStorage.setItem('tokenPair', JSON.stringify(response.data));

        } catch (e) {
            console.log(e);
        }

        return !!(response?.data?.access && response?.data?.refresh);
    },
    refresh: async (refreshToken: string) => {
        const response = await axiosInstance.post<TokenPairModel>('/auth/refresh', {refresh: refreshToken});
        localStorage.setItem('tokenPair', JSON.stringify(response.data));
    },
}

const carService = {
    getCars: async (page: string) => {

        try {
            const response = await axiosInstance.get<CarPaginatedModel>('/cars', {params:{page: page}});
            return response.data;

        } catch (e) {
            const axiosError = e as AxiosError;

            if (axiosError?.response?.status === 401) {
                const refreshToken = retriveLocalStorageData<TokenPairModel>('tokenPair').refresh;
                await authService.refresh(refreshToken);
                await carService.getCars(page);
            }
        }
    }
}

export {
    authService,
    carService
}