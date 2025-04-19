import axios from 'axios';
import { User as UserEntities } from '../../../entities/user';
import { createSlice } from '@reduxjs/toolkit';
import { AppDispatch } from '../store';
import { AxiosError } from "axios";

type User = Omit<
	UserEntities,
	| 'phone_number'
	| 'second_phone_number'
	| 'password'
	| 'gender_id'
	| 'created_at'
	| 'updated_at'
	| 'deleted_at'
>;

interface InitialStateAuthReducer {
	user: User;
	isLogin: boolean;
}

const initialState: InitialStateAuthReducer = {
	user: {
		id: null,
		full_name: '',
		avatar_url: '',
		email: '',
		role_id: null,
	},
	isLogin: false,
};

export const AuthReducer = createSlice({
	name: 'AuthReducer',
	initialState,
	reducers: {
		setUser: (state, action) => {
			const { avatar_url, email, id, full_name, role_id }: User = action.payload;

			state.user = {
				avatar_url,
				email,
				id,
				full_name,
				role_id,
			};
		},
		loginSuccess: (state) => {
			console.log('LOGIN AJA SUCCESS ANJAY');
			state.isLogin = true;
		},
		logoutSuccess: (state) => {
			console.log('logoutSuccess called. Resetting user state.');
			state.user = initialState.user;
			state.isLogin = false;
			localStorage.removeItem('token');
		},
		keepLoginSuccess: (state) => {
			console.log('KEEP LOGIN SUCCESS ANJAY');
			state.isLogin = true;
		},
	},
});

interface LoginAuthReducerProps {
	email: string;
	password: string;
}

export const login = ({ email, password }: LoginAuthReducerProps) => {
	return async (dispatch: AppDispatch) => {
		try {
			const res = await axios.post(`${import.meta.env.VITE_APP_API_URL}/v1/auth/login`, {
				email,
				password,
			});

			const token = res.data?.data?.token;

			const refreshToken = res.data.data?.refreshToken;

			localStorage.setItem('token', token);

			localStorage.setItem('refreshToken', refreshToken);

			dispatch(setUser(res?.data?.data?.user));

			dispatch(loginSuccess());

			return res;
		} catch (error) {
			if (error instanceof AxiosError) {
				console.error('Login API Error:', error.response?.data);
				return Promise.reject(error.response?.data); // Propagate the error properly
			}

			return Promise.reject(error); // Handle non-Axios errors
		}
	};
};

export const keepLogin = () => {
	return async (dispatch: AppDispatch) => {
		try {
			const token = localStorage.getItem('token');

			if (token) {
				const res = await axios.get(`${import.meta.env.VITE_APP_API_URL}/v1/auth/keep-login`, {
					headers: {
						Authorization: `Bearer ${token}`,
					},
				});

				console.log("KEEP LOGIN DISPATCH: ", res?.data?.data?.user);

				dispatch(setUser(res?.data?.data?.user));

				dispatch(keepLoginSuccess());

				console.log("DISPATCH KEEP LOGIN SUCCESS SUKSES")
			}
		} catch (error) {
			localStorage.removeItem('token');
			console.error('[ERROR] ', error);
			throw error;
		}
	};
};

export const { loginSuccess, logoutSuccess, setUser, keepLoginSuccess } = AuthReducer.actions;