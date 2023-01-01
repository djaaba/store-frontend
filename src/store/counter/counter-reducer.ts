import { CounterAction } from "../../interfaces";
import { INCREMENT, DECREMENT } from "./counter-consts";

export const counter = (state: number = 0, action: CounterAction) => {
    switch(action.type){
        case INCREMENT: {
            return state + 1;
        }
        case DECREMENT: {
            console.log(state)
            return state - 1;
        }
        default:
            return state;
    }
}