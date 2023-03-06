export enum typesUserAction {
    LOGIN = "LOGIN",
    LOGOUT = "LOGOUT",
    REGISTER = "REGISTER"
}

export type UserAction = {
    type: typesUserAction;
}

export interface IUser {
    isAuth: boolean;
    _user: any;
}