import axios from "axios";
import {UserWithoutPassword} from "./user.interfaces";



export interface AuthUseCases {
    login(): Promise<axios.AxiosResponse<UserWithoutPassword> | undefined>;
    logout(): Promise<void>;
    keepLogin(): Promise<axios.AxiosResponse<UserWithoutPassword> | undefined>;
}