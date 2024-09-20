import { AddressInfoProps } from "../../contexts/AddressContext"
import { AddressActionTypes } from "./actions"

import { produce } from 'immer'

export function addressReducer(state: AddressInfoProps[], action: any) {
    switch (action.type) {
        case AddressActionTypes.ADD_NEW_ADDRESS:
            const newAddressWithID: AddressInfoProps = {
                ...action.payload.newAddress,
                id: action.payload.id,
            }
            
            return produce(state, draft => {
                draft.push(newAddressWithID)
            })

        default:
            return state
    }
}