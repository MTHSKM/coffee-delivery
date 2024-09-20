import { CoffeeState } from "../../contexts/CafesContext"
import { CoffeeActionTypes } from "./actions"

import { produce } from 'immer'

export function cafesReducer(state: CoffeeState, action: any) {
    switch (action.type) {
        case CoffeeActionTypes.SET_FILTER:
            
            return produce(state, draft => {
                draft.filter = action.payload
            })
        default:
            return state
    }
}