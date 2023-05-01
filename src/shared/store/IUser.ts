export enum typesUserAction {
    LOGOUT = "LOGOUT",
    LOGIN = "LOGIN",
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
    address: string;
    role: string;
}
