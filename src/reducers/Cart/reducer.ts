import { CartItem } from "../../contexts/CartContext"
import { CartActionTypes } from "./actions"

import { produce } from 'immer'

export function cartReducer(state: CartItem[], action: any) {
    switch (action.type) {
        case CartActionTypes.ADD_TO_CART: {
            const { coffee, quantity } = action.payload
            return produce(state, draft => {
                const alreadyExistCartIndex = draft.findIndex(item => item.id === coffee.id)

                if (alreadyExistCartIndex > -1) {
                    const updatedQuantity = draft[alreadyExistCartIndex].quantity + quantity

                    if(updatedQuantity <= 0) {
                        draft.splice(alreadyExistCartIndex, 1)
                    } else {
                        draft[alreadyExistCartIndex].quantity = updatedQuantity
                    }
                    
                } else {
                    draft.push({...coffee, quantity})
                }
                
            })
        }

        case CartActionTypes.REMOVE_FROM_CART:
            return produce(state, draft => {
                const index = draft.findIndex(item => item.id === action.payload.id)

                if(index > -1) {
                    draft.splice(index, 1)
                }
            })

        case CartActionTypes.CLEAR_CART:
            return produce(state, draft => {
                draft.splice(0, draft.length)
            })

        default:
            return state
    }
}