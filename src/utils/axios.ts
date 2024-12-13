import axios from "axios"

export class AxiosHelper {
    public static axiosInstance() {
        const instance = axios.create({
            baseURL: process.env.VUE_APP_API_URL,
        })
        return instance;
    }
}