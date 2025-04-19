import {AuthUseCases} from "../interfaces/auth.interface";
import axios from "axios";
import {UserWithoutPassword, UserWithoutPasswordWithToken} from "../interfaces/user.interfaces";
import {AuthRepository} from "../repositories/auth.repository";

export class AuthInteractor implements AuthUseCases{
    private authRepository: AuthRepository;
    constructor(authRepository: AuthRepository){
        this.authRepository = authRepository;
    }
    public async login(): Promise<axios.AxiosResponse<UserWithoutPasswordWithToken> | undefined> {
        const loginData = await this.authRepository.login();
        return loginData;
    }

    logout(): Promise<void> {
        throw new Error("Method not implemented.");
    }

    keepLogin(): Promise<axios.AxiosResponse<UserWithoutPassword> | undefined> {
        throw new Error("Method not implemented.");
    }

}