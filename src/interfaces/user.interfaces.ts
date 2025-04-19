export interface User {
    first_name: string,
    phone_number: string,
    email: string,
    password: string,
    gender_id: number,
    id?: number | null,
    created_at?: Date,
    full_name?: string,
    last_name?: string | null,
    second_phone_number?: string | null,
    avatar_url?: string | null,
    role_id?: number | null,
    is_verified?: boolean,
    updated_at?: Date | null,
    deleted_at?: Date | null,
    cashier_transactions?: [] | null,
    customer_transactions?: [] | null,
    User_Address?: [] | null,
    Booking?: [] | null
}

export type UserWithoutPassword = Omit<User, "password">

export interface UserWithoutPasswordWithToken {
    user: UserWithoutPassword
    accessToken: string;
    refreshToken: string;
}
export interface SignUpInitialValues extends  User{
    confirm_password: string | null,
}

export interface UserInterface {
    signUp(): Promise<undefined>;
}