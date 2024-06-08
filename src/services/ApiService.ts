import axios from "axios";
import {baseURL} from "../constants/Urls";

const apiService = axios.create({baseURL});

export {
    apiService
}