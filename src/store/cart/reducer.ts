import {
    IDevice,
    CartAction,
    typesCartAction as types,
} from "@/shared";

// const initialState: IDevice[] = [];

export const cart = (state: IDevice[] = [], action: CartAction) => {
    switch (action.type) {
        case types.ADD_TO_CART: {
            return state.filter((product) => product.id === action.body.id)
                .length
                ? state.filter((product) =>
                    product.id === action.body.id
                        ? {
                            ...product,
                            count: ++product.count,
                        }
                        : product
                )
                : [...state, action.body];

            // return [...state, action.body];
            // чиним корзину, чтобы при повторном клике увеличивалось количество
        }
        case types.REMOVE_FROM_CART: {
            return state.filter((product) => product.id !== action.body.id);
        }

        case types.INCREMENT_COUNT: {
            return state.map((product) =>
                product.id === action.body.id
                    ? {
                        ...product,
                        count: ++product.count,
                    }
                    : product
            );
        }
        case types.DECREMENT_COUNT: {
            return state.map((product) =>
                product.id === action.body.id
                    ? {
                        ...product,
                        count:
                            product.count > 1
                                ? --product.count
                                : product.count,
                    }
                    : product
            );
        }
        default:
            return state;
    }
};
