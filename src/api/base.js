import axios from "axios";
import { authHeader } from "../helper/authHelper";

export const API_PREFIX = "";
const BASE_URL =
    "https://fakestoreapi.com/";

const axiosApi = axios.create({
    baseURL: `${BASE_URL}/${API_PREFIX}`,
});

export const axiosInstance = axiosApi;

export async function get(url, config = {}) {
    return await axiosApi
        .get(url, { params: config, headers: authHeader() })
        .then((response) => response)
        .catch((error) => error.response);
}