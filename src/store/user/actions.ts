import { IUserInfo, typesUserAction as type } from "@/shared";

export const logout = () => ({
    type: type.LOGOUT,
});

export const login = (body: IUserInfo) => ({
    type: type.LOGIN,
    body
})