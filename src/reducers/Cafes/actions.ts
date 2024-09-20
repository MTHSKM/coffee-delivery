export enum CoffeeActionTypes {
    SET_FILTER = 'SET_FILTER'
}

export function setFilterAction(filter: string) {
    return { type: CoffeeActionTypes.SET_FILTER, payload: filter }
}