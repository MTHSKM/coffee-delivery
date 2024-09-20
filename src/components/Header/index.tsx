import { NavLink } from 'react-router-dom'
import deliveryLogo from '../../assets/delivery-logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { CartContainer, HeaderContainer } from './styles'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

export function Header() {
    const contextCart = useContext(CartContext)

    
    if (!contextCart) {
        return (
            <div> ...Loading </div>
        )
    }

    const { cart } = contextCart
        
    const totalItensInCart = cart.reduce((total: number, item: { quantity: number }) => total + item.quantity, 0)



    return (
        <HeaderContainer>
            <nav>
                <NavLink to="/">
                    <img src={deliveryLogo} alt=''></img>
                </NavLink>
            </nav>

            <CartContainer>
                <div>
                    <MapPin size={22} color='#8047F8' weight='fill'></MapPin> 
                    <span>Porto Alegre, RS</span>
                </div>
                <nav>
                    <NavLink to="/address" title="addres">
                    <ShoppingCart 
                    size={22}  
                    color={'#C47F17'} 
                    weight='fill'
                    ></ShoppingCart>
                    {totalItensInCart > 0 ? <span>{totalItensInCart}</span> : null}
                    </NavLink>
                </nav>
            </CartContainer>
        </HeaderContainer>
    )
}