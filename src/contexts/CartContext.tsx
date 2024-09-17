import { createContext, ReactNode, useState } from "react";
import { CoffeContextType } from "./CafesContext";


interface CartItem extends CoffeContextType {
    quantity: number
}

interface CartContextType {
    cart: CartItem[]
    handleAddToCart: (coffee: CoffeContextType, quantity: number) => void
    handleRemoveFromCart: (id: string) => void
    handleClearCart: () => void
}

interface CartContextProviderProps {
    children: ReactNode
}

export const CartContext = createContext<CartContextType | null>(null)

export function CartContextProvider({children}: CartContextProviderProps) {
    const [cart, setCart] = useState<CartItem[]>([])

    function handleAddToCart(coffee: CoffeContextType, quantity: number) {
        setCart((state) => {
            const alreadyExistCart = state.findIndex(item => item.id === coffee.id)

            if(alreadyExistCart > -1) {
                const updateCart = [...state]
                updateCart[alreadyExistCart].quantity += quantity
                return updateCart
            } else {
                return [...state, {...coffee, quantity}]
            }
        })
    }

    function handleRemoveFromCart(id: string) {
        setCart((state) => state.filter(item => item.id !== id))
    }

    function handleClearCart() {
        setCart([])
    }

    return(
        <CartContext.Provider value={{cart, handleAddToCart, handleRemoveFromCart, handleClearCart}}>
            {children}
        </CartContext.Provider>
    )
}