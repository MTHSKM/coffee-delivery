import { createContext, ReactNode, useReducer } from "react"
import { v4 as uuidv4 } from 'uuid'

import expresso from '../assets/coffesImage/expresso.svg'
import americano from '../assets/coffesImage/americano.svg'
import cremoso from '../assets/coffesImage/expresso_cremoso.svg'
import gelado from '../assets/coffesImage/cafe_gelado.svg'
import comLeite from '../assets/coffesImage/cafe_com_leite.svg'
import latte from '../assets/coffesImage/latte.svg'
import capuccino from '../assets/coffesImage/capuccino.svg'
import macchiato from '../assets/coffesImage/machiatto.svg'
import mocaccino from '../assets/coffesImage/mochacinno.svg'
import chocolateQuente from '../assets/coffesImage/chocolate_quente.svg'
import cubano from '../assets/coffesImage/cubano.svg'
import havaiano from '../assets/coffesImage/havaiano.svg'
import arabe from '../assets/coffesImage/arabe.svg'
import irlandes from '../assets/coffesImage/irlandes.svg'
import { cafesReducer } from "../reducers/Cafes/reducer"
import { setFilterAction } from "../reducers/Cafes/actions"

export interface CoffeeContextType {
    id: string
    title: string
    description: string
    tags: string[]
    price: number
    image: string
}

export interface CoffeeState {
    coffees: CoffeeContextType[]
    filter: string
}

interface CoffeeContextProps {
    coffees: CoffeeContextType[]
    filteredCoffees: CoffeeContextType[]
    handleFilter: (filter: string) => void
}

export const CoffeeContext = createContext<CoffeeContextProps | null>(null)

interface CoffeeContextProviderProps {
    children: ReactNode
}

const initialState: CoffeeState = {
    coffees: [
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
            title: 'Expresso Americano',
            description: 'Expresso diluído, menos intenso que o tradicional',
            tags: ['Tradicional'],
            price: 9.90,
            image: americano
        },
        {
            id: uuidv4(),
            title: 'Expresso Cremoso',
            description: 'Café expresso tradicional com espuma cremosa',
            tags: ['Tradicional'],
            price: 9.90,
            image: cremoso
        },
        {
            id: uuidv4(),
            title: 'Expresso Gelado',
            description: 'Bebida preparada com café expresso e cubos de gelo',
            tags: ['Tradicional', 'Gelado'],
            price: 9.90,
            image: gelado
        },
        {
            id: uuidv4(),
            title: 'Café Com Leite',
            description: 'Meio a meio de expresso tradicional com leite vaporizado',
            tags: ['Tradicional', 'Com Leite'],
            price: 9.90,
            image: comLeite
        },
        {
            id: uuidv4(),
            title: 'Latte',
            description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
            tags: ['Tradicional', 'Com Leite'],
            price: 9.90,
            image: latte
        },
        {
            id: uuidv4(),
            title: 'Capuccino',
            description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
            tags: ['Tradicional', 'Com Leite'],
            price: 9.90,
            image: capuccino
        },
        {
            id: uuidv4(),
            title: 'Macchiato',
            description: 'Café expresso misturado com um pouco de leite quente e espuma',
            tags: ['Tradicional', 'Com Leite'],
            price: 9.90,
            image: macchiato
        },
        {
            id: uuidv4(),
            title: 'Mocaccino',
            description: 'Café expresso com calda de chocolate, pouco leite e espuma',
            tags: ['Tradicional', 'Com Leite'],
            price: 9.90,
            image: mocaccino
        },
        {
            id: uuidv4(),
            title: 'Chocolate Quente',
            description: 'Bebida feita com chocolate dissolvido no leite quente e café',
            tags: ['Especial', 'Com Leite'],
            price: 9.90,
            image: chocolateQuente
        },
        {
            id: uuidv4(),
            title: 'Cubano',
            description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
            tags: ['Especial', 'Alcoólico', 'Gelado'],
            price: 9.90,
            image: cubano
        },
        {
            id: uuidv4(),
            title: 'Havaiano',
            description: 'Bebida adocicada preparada com café e leite de coco',
            tags: ['Especial'],
            price: 9.90,
            image: havaiano
        },
        {
            id: uuidv4(),
            title: 'Árabe',
            description: 'Bebida preparada com grãos de café árabe e especiarias',
            tags: ['Especial'],
            price: 9.90,
            image: arabe
        },
        {
            id: uuidv4(),
            title: 'Irlandês',
            description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
            tags: ['Especial', 'Alcoólico'],
            price: 9.90,
            image: irlandes
        }
    ],
    filter: ''
}


export function CoffeeContextProvider({ children }: CoffeeContextProviderProps) {
    const [state, dispatch] = useReducer(cafesReducer, initialState)

    function handleFilter(filter: string) {
        dispatch(setFilterAction(filter))
    }

    const filteredCoffees = state.coffees.filter(coffee =>
        state.filter === '' || coffee.tags.includes(state.filter)
    )

    return (
        <CoffeeContext.Provider value={{ coffees: state.coffees, filteredCoffees, handleFilter }}>
            {children}
        </CoffeeContext.Provider>
    )
}
