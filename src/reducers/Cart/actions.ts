import { CoffeeContextType } from "../../contexts/CafesContext"

export enum CartActionTypes {
    ADD_TO_CART = 'ADD_TO_CART',
    REMOVE_FROM_CART = 'REMOVE_FROM_CART',
    CLEAR_CART = 'CLEAR_CART'
}

export function addToCartAction(coffee: CoffeeContextType, quantity: number) {
    return { type: CartActionTypes.ADD_TO_CART, payload: { coffee, quantity } }
}

export function removeFromCartAction(id: string) {
    return { type: CartActionTypes.REMOVE_FROM_CART, payload: { id } }
}

export function clearCartAction() {
    return { type: CartActionTypes.CLEAR_CART }
}