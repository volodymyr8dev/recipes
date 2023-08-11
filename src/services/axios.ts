import axios, {AxiosResponse} from "axios";

import {baseURL} from "../configs";

export type AxiosRes<T> = Promise<AxiosResponse<T>>

const axiosInstance = axios.create({
    baseURL
})

export {axiosInstance}