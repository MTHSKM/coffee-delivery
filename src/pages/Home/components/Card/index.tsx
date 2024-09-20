import { useContext, useEffect, useState } from "react";
import { CardContainer, CardImageContainer, CardListContainer, OutOfCoffee, ProductDescriptionContainer, ProductMenuCartContainer, ProductNameContainer, ProductOrderContainer, ProductOrderInputContainer, ProductPriceContainer, TagContainer } from "./styles";
import { CoffeeContext, CoffeeContextType } from "../../../../contexts/CafesContext";
import { CartContext } from "../../../../contexts/CartContext";
import { Minus, Plus, ShoppingCart } from "phosphor-react";

export function Card() {
    const contextCoffee = useContext(CoffeeContext)
    const contextCart = useContext(CartContext)
    const [isItemAdded, setIsItemAdded] = useState<{ [key: string]: boolean}>({})
    const [coffeQuantity, setCoffeQuantity] = useState<{ [key: string]: number }>({})

    if (!contextCoffee || !contextCart) {
        return (
            <div> ...Loading </div>
        )
    }

    const { filteredCoffees } = contextCoffee
    const { handleAddToCart } = contextCart

    function addToCart(coffee: CoffeeContextType, quantity: number) {
        handleAddToCart(coffee, quantity)
        setIsItemAdded((state) => ({...state, [coffee.id]: true}))
        setCoffeQuantity((state) => ({ ...state, [coffee.id]: 1 }))
    }
    
    useEffect(() => {
        let timeouts = Object.keys(isItemAdded).map(id => {
            if (isItemAdded[id]) {
                return window.setTimeout(() => {
                    setIsItemAdded((state) => ({
                        ...state,
                        [id]: false
                    }))
                }, 1000)
            }
            
            return null
        })

        return () => {
            timeouts.forEach(timeout => {
                if (timeout !== null) {
                    window.clearTimeout(timeout)
                }
            })
        }
    }, [isItemAdded])

    function increaseQuantity(id: string) {
        setCoffeQuantity((state) => ({
            ...state,
            [id]: (state[id] || 1) + 1
        }))
    }

    function decreaseQuantity(id: string) {
        setCoffeQuantity((state) => {
            const newCoffeeQuantity = Math.max((state[id] || 1) -1 , 1)
            return { ...state, [id]: newCoffeeQuantity}
        })
    }

    return (
        <CardListContainer>
            {filteredCoffees.length > 0 ? (
                filteredCoffees.map(coffee => {
                    const quantity = coffeQuantity[coffee.id] || 1
                    const itemAdded = isItemAdded[coffee.id] || false;

                    return (
                        <CardContainer key={coffee.id}>
                            <CardImageContainer src={coffee.image} alt={coffee.title}></CardImageContainer>

                            <TagContainer>
                                {coffee.tags.map((tag) => (
                                    <span key={tag}>{tag}</span>
                                ))}
                            </TagContainer>

                            <ProductNameContainer>{coffee.title}</ProductNameContainer>

                            <ProductDescriptionContainer>{coffee.description}</ProductDescriptionContainer>

                            <ProductMenuCartContainer>
                                <ProductPriceContainer>
                                    <span>R$</span>
                                    <span>{coffee.price.toFixed(2)}</span>
                                </ProductPriceContainer>

                                <ProductOrderContainer $itemAdded={itemAdded}>
                                    <ProductOrderInputContainer>
                                        <button onClick={() => decreaseQuantity(coffee.id)}>
                                            <Minus size={14} />
                                        </button>
                                        <span>{quantity}</span>
                                        <button onClick={() => increaseQuantity(coffee.id)}>
                                            <Plus size={14} />
                                        </button>
                                    </ProductOrderInputContainer>

                                    <button disabled={itemAdded} onClick={() => { addToCart(coffee, quantity) }}>
                                        {isItemAdded ? (
                                            <ShoppingCart
                                                size={22}
                                                color={'#FFFFFF'}
                                                weight='fill'
                                            />
                                        ) : (
                                            <ShoppingCart size={22} color={'#FFFFFF'}
                                                weight='fill' />
                                        )}
                                    </button>
                                </ProductOrderContainer>
                            </ProductMenuCartContainer>
                        </CardContainer>
                    )
                })
            ) : (
                <OutOfCoffee>

                </OutOfCoffee>
            )}
        </CardListContainer>
    )
}