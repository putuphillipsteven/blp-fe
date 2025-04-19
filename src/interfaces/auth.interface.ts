import axios from "axios";
import {UserWithoutPassword, UserWithoutPasswordWithToken} from "./user.interfaces";



export interface AuthUseCases {
    login(): Promise<axios.AxiosResponse<UserWithoutPasswordWithToken> | undefined>;
    logout(): Promise<void>;
    keepLogin(): Promise<axios.AxiosResponse<UserWithoutPassword> | undefined>;
}