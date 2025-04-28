import axios from "axios"

export class AxiosHelper {
    public static axiosInstance() {
        return axios.create({
            baseURL: process.env.VUE_APP_API_URL,
        })
    }
}