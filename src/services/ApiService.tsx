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

        const response= await axiosInstance.post<TokenPairModel>('/auth', authData);
            localStorage.setItem('tokenPair', JSON.stringify(response.data));
            return !!(response?.data?.access && response?.data?.refresh);
    },

    refresh: async () => {
        const refreshToken= retriveLocalStorageData<TokenPairModel>('tokenPair').refresh;
        const response = await axiosInstance.post<TokenPairModel>('/auth/refresh', {refresh: refreshToken});
        localStorage.setItem('tokenPair', JSON.stringify(response.data));
    },
}

const carService = {
    getCars: async (page: string = '1'):Promise<CarPaginatedModel | null> => {

            const response = await axiosInstance.get<CarPaginatedModel>('/cars', {params:{page: page}});
            return response.data;
    }
}

export {
    authService,
    carService
}