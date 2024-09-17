import { useContext, useEffect, useState } from "react";
import { CardContainer, CardImageContainer, CardListContainer, OutOfCoffee, ProductDescriptionContainer, ProductMenuCartContainer, ProductNameContainer, ProductOrderContainer, ProductOrderInputContainer, ProductPriceContainer, TagContainer } from "./styles";
import { CoffeContext, CoffeContextType } from "../../contexts/CafesContext";
import { CartContext } from "../../contexts/CartContext";
import { Minus, Plus, ShoppingCart } from "phosphor-react";

export function Card() {
    const contextCoffee = useContext(CoffeContext)
    const contextCart = useContext(CartContext)
    const [isItemAdded, setIsItemAdded] = useState(false)

    if (!contextCoffee || !contextCart) {
        return (
            <div> ...Loading </div>
        )
    }

    const { filteredCoffees } = contextCoffee

    const { handleAddToCart } = contextCart

    function addToCart(coffee: CoffeContextType, quantity: number) {
        handleAddToCart(coffee, quantity)
        setIsItemAdded(true)
    }



    useEffect(() => {
        let timeout: number

        if (isItemAdded) {
            timeout = setTimeout(() => {
                setIsItemAdded(false)
            }, 1000)
        }

        return () => {
            if (timeout) {
                clearTimeout(timeout)
            }
        }
    }, [isItemAdded])

    return (


        <CardListContainer>
            {filteredCoffees.length > 0 ? (
                filteredCoffees.map(coffee => {


                    const [coffeQuantity, setCoffeQuantity] = useState(1)

                    function increaseQuantity() {
                        setCoffeQuantity(state => state + 1)
                    }
                
                    function decreaseQuantity() {
                        setCoffeQuantity(state => state - 1)
                    }
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

                                <ProductOrderContainer $itemAdded={isItemAdded}>
                                    <ProductOrderInputContainer>
                                        <button onClick={decreaseQuantity}>
                                            <Minus size={14} />
                                        </button>
                                        <span>{coffeQuantity}</span>
                                        <button onClick={increaseQuantity}>
                                            <Plus size={14} />
                                        </button>
                                    </ProductOrderInputContainer>

                                    <button disabled={isItemAdded} onClick={() => { addToCart(coffee, coffeQuantity); setCoffeQuantity(1) }}>
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