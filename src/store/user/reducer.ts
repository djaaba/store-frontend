import { IUser, UserAction, typesUserAction as types } from "../../shared";

const initialState = {
    isAuth: true,
    _user: {}
}

export const user = (state: IUser = initialState, action: UserAction) => {
    switch (action.type) {
        case types.LOGIN: {
            return true;
        }
        default:
            return state;
    }
};
