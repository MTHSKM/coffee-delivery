import { useContext, useState } from "react";
import { Card } from "../Card";
import { CatalogCardsContainer, CatalogContainer, CatalogOptionsContainer, CatalogTextContainer } from "./styles";
import { CoffeeContext } from "../../../../contexts/CafesContext";

export function Catalog() {
    const context = useContext(CoffeeContext)
    const [activeFilter, setActiveFilter] = useState('');

    if(!context) {
        return(
            <div> ...Loading </div>
        )
    }

    const { handleFilter } = context

    function handleFilterCatalog(filter: string) {
        handleFilter(filter)
        setActiveFilter(filter)
    }

    return (
        <CatalogContainer>
            <CatalogTextContainer>
                <h1>Nossos Cafés</h1>
                <CatalogOptionsContainer>
                    <span
                    data-state={activeFilter === '' ? 'true' : 'false'}
                    onClick={() => {handleFilterCatalog('')}}
                    >Todos
                    </span>
                    <span
                    data-state={activeFilter === 'Tradicional' ? 'true' : 'false'}
                    onClick={() => handleFilterCatalog('Tradicional')}
                    >Tradicional</span>
                    <span
                    data-state={activeFilter === 'Gelado' ? 'true' : 'false'}
                    onClick={() => handleFilterCatalog('Gelado')}
                    >Gelado</span>
                    <span
                    data-state={activeFilter === 'Com Leite' ? 'true' : 'false'}
                    onClick={() => handleFilterCatalog('Com Leite')}
                    >Com Leite</span>
                    <span
                    data-state={activeFilter === 'Especial' ? 'true' : 'false'}
                    onClick={() => handleFilterCatalog('Especial')}
                    >Especial</span>
                    <span
                    data-state={activeFilter === 'Alcoólico' ? 'true' : 'false'}
                    onClick={() => handleFilterCatalog('Alcoólico')}
                    >Alcoólico</span>
                </CatalogOptionsContainer>
            </CatalogTextContainer>

            <CatalogCardsContainer>
                <Card></Card>
            </CatalogCardsContainer>
        </CatalogContainer>
    )
}