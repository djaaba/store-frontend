import { IUser, UserAction, typesUserAction as types } from "@/shared";

const initialState = {
    isAuth: false,
    _user: undefined
}

export const user = (state: IUser = initialState, action: UserAction) => {
    switch (action.type) {
        case types.LOGIN: {
            return Object.assign({}, state, {
                _user: action.body,
                isAuth: true
            })
        }
        case types.LOGOUT: {
            return Object.assign({}, initialState)
        }
        default:
            return state;
    }
};
