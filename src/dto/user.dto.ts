export type UserSignupDto = {
    username: string;
    password: string;
    email?: string;
    phone?: string;
}

export type UserLoginDto = {
    username: string;
    password: string;
}
