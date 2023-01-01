import { INCREMENT, DECREMENT } from "./counter-consts"

export const increment = () => ({
    type: INCREMENT
})

export const decrement = () => ({
    type: DECREMENT
})