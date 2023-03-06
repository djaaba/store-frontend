import { IUser, IUserInfo, typesUserAction as type } from "@/shared";

export const loginUser = () => ({
    type: type.LOGIN
});

export const logout = () => ({

});

export const register = () => ({

})

export const setUser = (body: IUserInfo) => ({
    type: type.SET_USER,
    body
})