import styled from "styled-components";

export const MainAddressContainer = styled.main`
  display: flex;
  max-width: 72.5rem;
  padding: 2.5rem 1.25rem;
  margin: 0 auto;
  gap: 2rem;

  color: ${props => props.theme['base-text']}
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h2 {
    color: ${props => props.theme['base-subtitle']}
  }

  > form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`

export const AddressContainer = styled.div`
  padding: 2.5rem;
  border-radius: 0.375rem;
  background-color: ${props => props.theme['base-card']};
  width: 100%;
  min-width: 40rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;
`

const Heading = styled.div`
  display: flex;
  gap: 0.5rem;

  div {
    span{
      color: ${props => props.theme['base-subtitle']};
    }
  }
`

export const AddressHeading = styled(Heading)`
  svg {
    color: ${props => props.theme['yellow-dark']}
  }
`

export const AddressForm = styled.div`
  display: grid;
  grid-template-areas:
    'cep . .'
    'street street street'
    'number fullAddress fullAddress'
    'neighborhood city state';
  grid-template-columns: 12.5rem 1fr 5rem;
  grid-gap: 1rem 0.75rem;
`

const FormsContainer = styled.div`
  padding: 2.5rem;
  border-radius: 0.375rem;
  background-color: ${props => props.theme['base-card']};
  width: 100%;
  min-width: 40rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const PaymentContainer = styled(FormsContainer)`
`

export const PaymentHeading = styled(Heading)`
  svg {
    color: ${props => props.theme['purple']}
  }
`

export const PaymentOptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.75rem;
  }
`

export const CartTotal = styled.div`
  padding: 2.5rem;
  border-radius: 0.5rem 2.25rem;
  background-color: ${props => props.theme['base-card']};
  width: 100%;
  min-width: 28rem;

  > span {
    display: block;
    height: 1px;
    background-color: ${props => props.theme['base-button']};
    margin: 1.5rem 0;
  }
`

export const CartTotalCoffeeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  
  > div {
     > img {
      width: 4rem;
      height: 4rem;
     }

     display: flex;
     align-items: stretch;
     gap: 1.25rem;

     > div {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
     }

     > aside {
      font-weight: bold;
     }
  }
`

export const CartTotalCoffeeInfoContainer = styled.div`
  display: flex;
  gap: 0.5rem;

  > button {
    padding: 0.375rem 0.5rem;
    background-color: ${props => props.theme['base-button']};
    border-radius: 0.375rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    transition: all 0.2s;

    &:hover {
      background-color: ${props => props.theme['base-hover']};
    }

    > svg {
      color: ${props => props.theme['purple']}
    }

    >span {
      text-transform: uppercase;
      color: ${props => props.theme['base-text']}
    }
  }
`

export const CartTotalInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  div:last-child {
    span {
      font-weight: bold;
    }
  }
`

export const CheckoutButtonContainer = styled.button`
  margin-top: 1.5rem;
  width: 100%;
  padding: 0.75rem;
  text-transform: uppercase;

  color: ${props => props.theme['white']};
  background-color: ${props => props.theme['yellow']};

  transition: all 0.2s;

  &:hover {
    background-color: ${props => props.theme['yellow-dark']};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.4;
  }

  &:hover:disabled {
    background-color: ${props => props.theme['yellow']};
  }

  border-radius: 6px;
`

export const LabelRadioContainer = styled.label`
  padding: 1rem;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  border-radius: 0.375rem;
  border: 1px solid transparent;
  background-color: ${props => props.theme['base-button']};
  color: ${props => props.theme['base-text']};
  text-transform: uppercase;
  font-size: 0.75rem;
  transition: all 0.2s;

  &:hover {
    background-color: ${props => props.theme['base-hover']};
  }

  &[data-state='true'] {
    background-color: ${props => props.theme['purple-light']};
    border-color: ${props => props.theme['purple']};
  }

  input {
    display: none;
  }

  svg {
    color: ${props => props.theme['purple']};
  }
`

export const LabelInputContainer = styled.input`

`

export const TrashButtonContainer = styled.div`
padding: 0.5rem;
  background-color: ${props => props.theme['base-button']};
  border-radius: 6px;

  display: flex;
  gap: 0.25rem;

  button {
    background-color: transparent;
    border: none;
    display: flex;
    align-items: center;
    gap: 0.25rem;

    svg {
      color: ${props => props.theme['purple']}
    }

    span {
      font-size: 0.75rem;
    }
  }
`