import { Bank, CreditCard, CurrencyDollar, MapPin, Money, Trash } from 'phosphor-react'
import { Fragment } from 'react/jsx-runtime'
import { useForm } from 'react-hook-form'
import { AddressContainer, AddressForm, AddressHeading, CartTotalCoffeeContainer, CartTotal, InfoContainer, MainAddressContainer, PaymentContainer, PaymentHeading, PaymentOptions, CartTotalCoffeeInfoContainer, CartTotalInfoContainer, CheckoutButtonContainer, LabelRadioContainer, LabelInputContainer, TrashButtonContainer } from './styles'
import { useContext, useState } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { QuantityInput } from './components/QuantityInput'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { TextInput } from './components/TextInput'
import { NavLink } from 'react-router-dom'
import { AddressContext } from '../../contexts/AddressContext'
import { v4 as uuidv4 } from 'uuid'
import { CoffeeContextType } from '../../contexts/CafesContext'

const newAddressFormValidationSchema = zod.object({
    cep: zod.number({ invalid_type_error: 'Informe o CEP' }),
    street: zod.string().min(1, 'Informe a rua'),
    number: zod.number().min(1, 'Informe o número'),
    fullAddress: zod.string(),
    neighborhood: zod.string().min(1, 'Informe o bairro'),
    city: zod.string().min(1, 'Informe a cidade'),
    state: zod.string().min(1, 'Informe a UF'),
    paymentMethod: zod.enum(['credit', 'debit', 'cash'], {
        invalid_type_error: 'Informe um método de pagamento',
    }),
})

export type FormInputs = zod.infer<typeof newAddressFormValidationSchema>

export function Address() {
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('')
    const contextCart = useContext(CartContext)
    const contextAddress = useContext(AddressContext)

    if (!contextCart || !contextAddress) {
        return (
            <div>...Loading</div>
        )
    }

    const { cart, handleAddToCart, handleRemoveFromCart, handleClearCart } = contextCart
    const { handleAddNewAddress }  = contextAddress

    const totalItemsPrice = cart.reduce((previousValue, currentItem) => {
        return (previousValue += currentItem.price * currentItem.quantity)
    }, 0)

    const {
        register,
        formState: { errors },
        watch,
    } = useForm<FormInputs>({
        resolver: zodResolver(newAddressFormValidationSchema),
        mode: 'all'
    })

    const propTudoJunto = {
        cep: watch('cep'),
        street: watch('street'),
        number: watch('number'),
        fullAddress: watch('fullAddress'),
        neighborhood: watch('neighborhood'),
        city: watch('city'),
        state: watch('state'),
        paymentMethod: watch('paymentMethod') as "credit" | "debit" | "cash" || "cash"
    }
    

    const propTudoJuntoId = uuidv4()

    const isSubmitDisabled = !selectedPaymentMethod || !propTudoJunto.cep || !propTudoJunto.street || !propTudoJunto.neighborhood || !propTudoJunto.city || !propTudoJunto.state || !propTudoJunto.number || cart.length === 0
    const disable = isSubmitDisabled ? true : false

    function addToCart(coffee: CoffeeContextType) {
        handleAddToCart(coffee, 1)
    }

    function removeFromCart(coffee: CoffeeContextType) {
        handleAddToCart(coffee, -1)
    }

    function deleteFromCart(coffee: CoffeeContextType) {
        handleRemoveFromCart(coffee.id)
    }

    return (
        <MainAddressContainer>
            <InfoContainer>
                <h2>Complete seu pedido</h2>

                <form id='address'>
                    <AddressContainer>
                        <AddressHeading>
                            <MapPin size={22}></MapPin>
                            <div>
                                <span>Endereço de Entrega</span>
                                <p>Informe o endereço onde deseja receber o seu pedido</p>
                            </div>
                        </AddressHeading>

                        <AddressForm>
                            <TextInput
                                placeholder='CEP'
                                type='number'
                                containerProps={{ style: { gridArea: 'cep' } }}
                                error={errors.cep}
                                {...register('cep', { valueAsNumber: true })}
                            ></TextInput>

                            <TextInput
                                placeholder='Rua'
                                containerProps={{ style: { gridArea: 'street' } }}
                                error={errors.street}
                                {...register('street')}
                            />

                            <TextInput
                                placeholder='Número'
                                type='number'
                                containerProps={{ style: { gridArea: 'number' } }}
                                error={errors.number}
                                {...register('number', { valueAsNumber: true })}
                            />

                            <TextInput
                                placeholder='Complemento'
                                optional
                                containerProps={{ style: { gridArea: 'fullAddress' } }}
                                error={errors.fullAddress}
                                {...register('fullAddress')}
                            />

                            <TextInput
                                placeholder='Bairro'
                                containerProps={{ style: { gridArea: 'neighborhood' } }}
                                error={errors.neighborhood}
                                {...register('neighborhood')}
                            />

                            <TextInput
                                placeholder='Cidade'
                                containerProps={{ style: { gridArea: 'city' } }}
                                error={errors.city}
                                {...register('city')}
                            />

                            <TextInput
                                placeholder='UF'
                                maxLength={2}
                                containerProps={{ style: { gridArea: 'state' } }}
                                error={errors.state}
                                {...register('state')}
                            />
                        </AddressForm>
                    </AddressContainer>

                    <PaymentContainer>
                        <PaymentHeading>
                            <CurrencyDollar size={22}></CurrencyDollar>
                            <div>
                                <span>Pagamento</span>

                                <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                            </div>
                        </PaymentHeading>

                        <PaymentOptions>
                            <div>
                                <LabelRadioContainer data-state={selectedPaymentMethod === 'credit' ? 'true' : 'false'}>
                                    <LabelInputContainer
                                        type='radio'
                                        {...register('paymentMethod')}
                                        value='credit'
                                        onChange={() => { setSelectedPaymentMethod('credit')}}
                                    ></LabelInputContainer>
                                    <CreditCard></CreditCard>
                                    <span>Cartão de Crédito</span>
                                </LabelRadioContainer>

                                <LabelRadioContainer data-state={selectedPaymentMethod === 'debit' ? 'true' : 'false'}>
                                    <LabelInputContainer
                                        type='radio'
                                        {...register('paymentMethod')}
                                        value='debit'
                                        onChange={() => { setSelectedPaymentMethod('debit')}}
                                    ></LabelInputContainer>
                                    <Bank></Bank>
                                    <span>Cartão de Débito</span>
                                </LabelRadioContainer>

                                <LabelRadioContainer data-state={selectedPaymentMethod === 'cash' ? 'true' : 'false'}>
                                    <LabelInputContainer
                                        type='radio'
                                        {...register('paymentMethod')}
                                        value='cash'
                                        onChange={() => { setSelectedPaymentMethod('cash')}}
                                    ></LabelInputContainer>
                                    <Money></Money>
                                    <span>Dinheiro ou Pix</span>
                                </LabelRadioContainer>
                            </div>

                        </PaymentOptions>
                    </PaymentContainer>
                </form>
            </InfoContainer>

            <InfoContainer>
                <h2>Cafés Selecionados</h2>

                <CartTotal>
                    {cart.map((coffee) => (
                        <Fragment key={coffee.id}>
                            <CartTotalCoffeeContainer>
                                <div>
                                    <img src={coffee.image}></img>

                                    <div>
                                        <span>
                                            {coffee.title}
                                        </span>

                                        <CartTotalCoffeeInfoContainer>
                                            <QuantityInput
                                                quantity={coffee.quantity}
                                                incrementQuantity={() => addToCart(coffee)}
                                                decrementQuantity={() => removeFromCart(coffee)}
                                            >

                                            </QuantityInput>

                                            <TrashButtonContainer>

                                                <button onClick={() => { deleteFromCart(coffee) }}>
                                                    <Trash></Trash>
                                                    <span>Remover</span>
                                                </button>
                                            </TrashButtonContainer>
                                        </CartTotalCoffeeInfoContainer>
                                    </div>
                                </div>

                                <aside>R$ {(coffee.price * coffee.quantity).toFixed(2)}</aside>
                            </CartTotalCoffeeContainer>

                            <span />
                        </Fragment>
                    ))}

                    <CartTotalInfoContainer>
                        <div>
                            <span>Total de Itens</span>
                            <span>
                                {new Intl.NumberFormat('pt-br', {
                                    currency: 'BRL',
                                    style: 'currency',
                                }).format(totalItemsPrice)}
                            </span>
                        </div>

                        <div>
                            <span>Entrega</span>
                            <span>
                                {new Intl.NumberFormat('pt-br', {
                                    currency: 'BRL',
                                    style: 'currency',
                                }).format(3.50)}
                            </span>
                        </div>

                        <div>
                            <span>Total</span>
                            <span>
                                {new Intl.NumberFormat('pt-br', {
                                    currency: 'BRL',
                                    style: 'currency',
                                }).format(totalItemsPrice + 3.50)}
                            </span>
                        </div>
                    </CartTotalInfoContainer>


                    <nav>
                        <NavLink to={`/order/${propTudoJuntoId}`} title='order'>
                            <CheckoutButtonContainer type='submit' form='address' disabled={disable} onClick={() => {handleAddNewAddress(propTudoJunto, propTudoJuntoId); handleClearCart()}}>
                                Confirmar Pedido
                            </CheckoutButtonContainer>
                        </NavLink>
                    </nav>

                </CartTotal>
            </InfoContainer>
        </MainAddressContainer>
    )
}
