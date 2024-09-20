import { FormInputs } from "../../pages/Address";

export enum AddressActionTypes {
    ADD_NEW_ADDRESS = 'ADD_NEW_ADDRESS'
}

export function addNewAddressAction(newAddress: FormInputs, id: string) {
    return { type: AddressActionTypes.ADD_NEW_ADDRESS, payload: { newAddress, id } }
}