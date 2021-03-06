import { ActionType } from "../action-types/index"
import { Action } from "../action/index"

const initialState = 0;

const reducer = ( action: Action, state: number = initialState): number => {
    switch (action.type){
        case ActionType.DEPOSIT:
            return state + action.payload;
        case ActionType.WITHDRAW:
            return state - action.payload;
        case ActionType.BANKRUPT:
            return 0;
        default:
            return state
    }
}

export default reducer