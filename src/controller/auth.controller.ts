import {AuthUseCases} from "../interfaces/auth.interface";
import axios from "axios";
import {UserWithoutPassword, UserWithoutPasswordWithToken} from "../interfaces/user.interfaces";
import {AuthInteractor} from "../interactor/auth.interactor";

export class AuthController implements AuthUseCases{
    private authInteractor: AuthInteractor
    constructor(authInteractor: AuthInteractor) {
        this.authInteractor = authInteractor;
    }
    public async login(): Promise<axios.AxiosResponse<UserWithoutPasswordWithToken> | undefined> {
            const loginData = await this.authInteractor.login();
            return loginData;
    }

    logout(): Promise<void> {
        throw new Error("Method not implemented.");
    }

    keepLogin(): Promise<axios.AxiosResponse<UserWithoutPassword> | undefined> {
        throw new Error("Method not implemented.");
    }
}