import {AuthUseCases} from "../interfaces/auth.interface";
import axios from "axios";
import {UserWithoutPassword} from "../interfaces/user.interfaces";
import {AxiosHelper} from "../utils/axios";


export class AuthRepository implements AuthUseCases {
    public async login(): Promise<axios.AxiosResponse<UserWithoutPassword> | undefined> {
        return await AxiosHelper.axiosInstance().post("/v1/login");
    }

    public async logout(): Promise<void> {
            throw new Error("METHOD NOT IMPLEMENTED")
    }
    public async keepLogin(): Promise<axios.AxiosResponse<UserWithoutPassword> | undefined> {
       return undefined;
    }
}