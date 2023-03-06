import { IUser, UserAction, typesUserAction as types, IUserInfo } from "@/shared";

const initialState = {
    isAuth: false,
    _user: undefined
}

export const user = (state: IUser = initialState, action: UserAction) => {
    switch (action.type) {
        case types.LOGIN: {
            return Object.assign({}, state, {
                isAuth: true
              })
        }
        case types.SET_USER: {
            return Object.assign({}, state, {
                _user: action.body
              })
        }
        default:
            return state;
    }
};
