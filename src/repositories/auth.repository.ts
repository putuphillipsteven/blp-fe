import {AuthUseCases} from "../interfaces/auth.interface";
import axios from "axios";
import {UserWithoutPassword, UserWithoutPasswordWithToken} from "../interfaces/user.interfaces";
import {AxiosHelper} from "../utils/axios";

export class AuthRepository implements AuthUseCases {
    public async login(): Promise<axios.AxiosResponse<UserWithoutPasswordWithToken> | undefined> {
        console.log("LOGIN DITEKAN")
        return await AxiosHelper.axiosInstance().post("/v1/login");
    }

    public async logout(): Promise<void> {
        throw new Error("METHOD NOT IMPLEMENTED");
    }

    public async keepLogin(): Promise<axios.AxiosResponse<UserWithoutPassword> | undefined> {
        throw new Error("METHOD NOT IMPLEMENTED");
    }
}