import {
    IDevice,
    CartAction,
    typesCartAction as types,
} from "../../shared";

const initialState = [
    {
        "id": 1,
        "count": 1,
        "description": "описание телефона",
        "imgUrl": "http://localhost:7000/device/e6258e73-9d33-4cff-8fcb-9b003912586e.jpg",
        "name": "телефон",
        "price": 50000,
        "discount": 2,
        "discountPrice": 19000,
        "viewCount": 1,
        "purchasesCount": 0,
        "typeId": 1,
        "brandId": 1
    },
    {
        "id": 2,
        "count": 1,
        "description": "описание телефона",
        "imgUrl": "http://localhost:7000/device/e6258e73-9d33-4cff-8fcb-9b003912586e.jpg",
        "name": "телефон",
        "price": 50000,
        "discount": 2,
        "discountPrice": 29000,
        "viewCount": 1,
        "purchasesCount": 0,
        "typeId": 1,
        "brandId": 1
    },
    {
        "id": 3,
        "count": 1,
        "description": "описание телефона",
        "imgUrl": "http://localhost:7000/device/e6258e73-9d33-4cff-8fcb-9b003912586e.jpg",
        "name": "телефон",
        "price": 50000,
        "discount": 2,
        "discountPrice": 39000,
        "viewCount": 1,
        "purchasesCount": 0,
        "typeId": 1,
        "brandId": 1
    }
]

// const initialState = []

export const cart = (state: IDevice[] = initialState, action: CartAction) => {
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
    }
};
