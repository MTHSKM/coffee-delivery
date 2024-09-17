import { createContext, ReactNode, useState } from "react"
import { v4 as uuidv4 } from 'uuid';

import expresso from '../assets/coffesImage/expresso.svg'
import teste from '../assets/coffesImage/arabe.svg'

export interface CoffeContextType {
    id: string,
    title: string,
    description: string,
    tags: string[],
    price: number,
    image: string
}

interface CoffeContextProps {
    coffees: CoffeContextType[],
    filteredCoffees: CoffeContextType[],
    handleFilter: (filter: string) => void
}

export const CoffeContext = createContext<CoffeContextProps | null>(null)

interface CoffeContextProviderProps {
    children : ReactNode
}

export function CoffeContextProvider({children}: CoffeContextProviderProps) {
    const [coffees] = useState<CoffeContextType[]>([
        {
            id: uuidv4(),
            title: 'Expresso Tradicional',
            description: 'O tradicional café feito com água quente e grãos moídos',
            tags: ['Tradicional'],
            price: 9.90,
            image: expresso
        },
        {
            id: uuidv4(),
            title: 'Arabe',
            description: 'O tradicional café feito com água quente e grãos moídos',
            tags: ['Com Leite'],
            price: 9.90,
            image: teste
        },
        {
            id: uuidv4(),
            title: 'Expresso Tradicional',
            description: 'O tradicional café feito com água quente e grãos moídos',
            tags: ['Tradicional'],
            price: 9.90,
            image: expresso
        },
        {
            id: uuidv4(),
            title: 'Expresso Tradicional',
            description: 'O tradicional café feito com água quente e grãos moídos',
            tags: ['Tradicional'],
            price: 9.90,
            image: expresso
        },
        {
            id: uuidv4(),
            title: 'Expresso Tradicional',
            description: 'O tradicional café feito com água quente e grãos moídos',
            tags: ['Tradicional'],
            price: 9.90,
            image: expresso
        },
        {
            id: uuidv4(),
            title: 'Expresso Tradicional',
            description: 'O tradicional café feito com água quente e grãos moídos',
            tags: ['Tradicional'],
            price: 9.90,
            image: expresso
        },
        {
            id: uuidv4(),
            title: 'Expresso Tradicional',
            description: 'O tradicional café feito com água quente e grãos moídos',
            tags: ['Tradicional'],
            price: 9.90,
            image: expresso
        },
        {
            id: uuidv4(),
            title: 'Expresso Tradicional',
            description: 'O tradicional café feito com água quente e grãos moídos',
            tags: ['Tradicional'],
            price: 9.90,
            image: expresso
        },
        {
            id: uuidv4(),
            title: 'Expresso Tradicional',
            description: 'O tradicional café feito com água quente e grãos moídos',
            tags: ['Tradicional'],
            price: 9.90,
            image: expresso
        },
        {
            id: uuidv4(),
            title: 'Expresso Tradicional',
            description: 'O tradicional café feito com água quente e grãos moídos',
            tags: ['Tradicional'],
            price: 9.90,
            image: expresso
        },
        {
            id: uuidv4(),
            title: 'Expresso Tradicional',
            description: 'O tradicional café feito com água quente e grãos moídos',
            tags: ['Tradicional'],
            price: 9.90,
            image: expresso
        },
        {
            id: uuidv4(),
            title: 'Expresso Tradicional',
            description: 'O tradicional café feito com água quente e grãos moídos',
            tags: ['Tradicional'],
            price: 9.90,
            image: expresso
        },
        {
            id: uuidv4(),
            title: 'Expresso Tradicional',
            description: 'O tradicional café feito com água quente e grãos moídos',
            tags: ['Tradicional'],
            price: 9.90,
            image: expresso
        },
        {
            id: uuidv4(),
            title: 'Expresso Tradicional',
            description: 'O tradicional café feito com água quente e grãos moídos',
            tags: ['Tradicional'],
            price: 9.90,
            image: expresso
        }
    ])

    const [filter, setFilter] = useState<string>('')

    function handleFilter(filter: string) {
        setFilter(filter)
    }

    const filteredCoffees = coffees.filter( coffee => 
        filter === '' || coffee.tags.includes(filter)
    )

    return(
        <CoffeContext.Provider value={{coffees, filteredCoffees, handleFilter}}>
            {children}
        </CoffeContext.Provider>
    )
}