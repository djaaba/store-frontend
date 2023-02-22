import {
    IProduct,
    CartAction,
    typesCartAction as types,
} from "../../shared";

export const cart = (state: IProduct[] = [], action: CartAction) => {
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

        case types.TOGGLE_PRODUCT: {
            return state.map((product) =>
                product.id === action.body.id
                    ? {
                          ...product,
                          isSelected: !product.isSelected,
                      }
                    : product
            );
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
        case types.SELECT_ALL: {
            return state.map((product) => ({
                ...product,
                isSelected: action.flag,
            }));
        }
        case types.REMOVE_SELECTED: {
            return state.filter((product) => product.isSelected === false);
        }
        default:
            return state;
    }
};
