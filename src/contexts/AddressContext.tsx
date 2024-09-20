import { createContext, ReactNode, useEffect, useReducer } from "react"
import { FormInputs } from "../pages/Address"
import { addressReducer } from "../reducers/Address/reducer"
import { addNewAddressAction } from "../reducers/Address/actions"

export interface AddressInfoProps extends FormInputs {
    id: string
}

interface AddressContextProps {
    address: AddressInfoProps[]
    handleAddNewAddress: (newAddress: FormInputs, id: string) => void
}

interface AddressContextProviderProps {
    children: ReactNode
}

const initialAddressState: AddressInfoProps[] = []

export const AddressContext = createContext<AddressContextProps | null>(null)

export function AddressContextProvider({ children }: AddressContextProviderProps) {
    const [addressState, dispatch] = useReducer(addressReducer, initialAddressState, () => {
        const storedStateAsJSON = localStorage.getItem('@coffee-delivery:address-state-1.0.0')

        if(storedStateAsJSON) {
            return JSON.parse(storedStateAsJSON)
        }
    })

    useEffect(() => {
        const stateJSON = JSON.stringify(addressState)

        localStorage.setItem('@coffee-delivery:address-state-1.0.0', stateJSON)
    }, [addressState])

    function handleAddNewAddress(newAddress: FormInputs, id: string) {
        dispatch(addNewAddressAction(newAddress, id))
    }

    return (
        <AddressContext.Provider value={{ address: addressState, handleAddNewAddress }}>
            {children}
        </AddressContext.Provider>
    )
}