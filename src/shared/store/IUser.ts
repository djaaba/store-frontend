export enum typesUserAction {
    LOGIN = "LOGIN",
    LOGOUT = "LOGOUT",
    REGISTER = "REGISTER",
    SET_USER = "SET_USER"
}

export type UserAction = {
    type: typesUserAction;
    body: IUserInfo
}

export interface IUser {
    isAuth: boolean;
    _user?: IUserInfo;
}

export interface IUserInfo {
    email: string;
    exp: number;
    iat: number;
    id: number;
    name: string;
    role: string;
}