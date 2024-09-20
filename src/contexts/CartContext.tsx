import { createContext, ReactNode, useEffect, useReducer } from "react"
import { CoffeeContextType } from "./CafesContext"
import { cartReducer } from "../reducers/Cart/reducer"
import { addToCartAction, clearCartAction, removeFromCartAction } from "../reducers/Cart/actions"

export interface CartItem extends CoffeeContextType {
    quantity: number
}

interface CartContextType {
    cart: CartItem[]
    handleAddToCart: (coffee: CoffeeContextType, quantity: number) => void
    handleRemoveFromCart: (id: string) => void
    handleClearCart: () => void
}

interface CartContextProviderProps {
    children: ReactNode
}

export const CartContext = createContext<CartContextType | null>(null)

const initialState: CartItem[] = []

export function CartContextProvider({ children }: CartContextProviderProps) {
    const [cartState, dispatch] = useReducer(cartReducer, initialState, () => {
        const storedStateAsJSON = localStorage.getItem('@coffee-delivery:cart-state-1.0.0')

        if(storedStateAsJSON) {
            return JSON.parse(storedStateAsJSON)
        }
    })
    
    useEffect(() => {
        const stateJSON = JSON.stringify(cartState)

        localStorage.setItem('@coffee-delivery:cart-state-1.0.0', stateJSON)
    }, [cartState])

    function handleAddToCart(coffee: CoffeeContextType, quantity: number) {
        dispatch(addToCartAction(coffee, quantity))
    }

    function handleRemoveFromCart(id: string) {
        dispatch(removeFromCartAction(id))
    }

    function handleClearCart() {
        dispatch(clearCartAction())
    }

    return (
        <CartContext.Provider value={{ cart: cartState, handleAddToCart, handleRemoveFromCart, handleClearCart }}>
            {children}
        </CartContext.Provider>
    )
}