import { useContext } from "react"
import { AddressContext } from "../../contexts/AddressContext"
import { useParams } from 'react-router-dom'
import { Container, OrderContainer, Heading, Info, InfoContent, MapPinContainer, TimerContainer, CurrencyDollarContainer } from "./styles"

import orderGoing from '../../assets/Illustration.svg'
import { CurrencyDollar, MapPin, Timer } from "phosphor-react"

export function Order() {
    const contextAddress = useContext(AddressContext)

    if (!contextAddress) {
        return <p>Loading...</p> 
    }

    const { address } = contextAddress
    const { orderId } = useParams()


    const orderInfo = address.filter((item) => item.id === orderId);

    console.log('Found orderInfo:', orderInfo)

    if (!orderInfo) {
        return <p>Order not found</p>
    }

    const paymentMethodDisplay = {
        credit: 'Cartão de crédito',
        debit: 'Cartão de débito',
        cash: 'Dinheiro',
    }

    return (
        <Container>
            <OrderContainer>
                <Heading>
                    <h2>Uhu! Pedido confirmado</h2>
                    <span>Agora é só aguardar que logo o café chegará até você</span>
                </Heading>

                <Info>
                    <InfoContent>
                        <MapPinContainer>
                            <MapPin
                                size={32}
                            />

                            <div>
                                <span>
                                    Entrega em{' '}
                                    <strong>
                                        {orderInfo[0].street}, {orderInfo[0].number}
                                    </strong>
                                </span>

                                <span>
                                    {orderInfo[0].neighborhood} - {orderInfo[0].city},{orderInfo[0].state}
                                </span>
                            </div>
                        </MapPinContainer>

                        <TimerContainer>
                            <Timer
                                size={32}
                            />

                            <div>
                                <span>Previsão de entrega</span>

                                <strong>20 min - 30 min</strong>
                            </div>
                        </TimerContainer>

                        <CurrencyDollarContainer>
                            <CurrencyDollar
                                size={32}
                            />

                            <div>
                                <span>Pagamento na entrega</span>

                                <strong>
                                    {paymentMethodDisplay[orderInfo[0].paymentMethod]}
                                </strong>
                            </div>
                        </CurrencyDollarContainer>
                    </InfoContent>
                </Info>
            </OrderContainer>

            <img src={orderGoing} alt="Pedido concluído" />
        </Container>
    )
}
