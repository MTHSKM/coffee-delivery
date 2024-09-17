import { useContext } from "react";
import { Card } from "../../../../components/Card";
import { CatalogCardsContainer, CatalogContainer, CatalogOptionsContainer, CatalogTextContainer } from "./styles";
import { CoffeContext } from "../../../../contexts/CafesContext";

export function Catalog() {
    const context = useContext(CoffeContext)

    if(!context) {
        return(
            <div> ...Loading </div>
        )
    }

    const { handleFilter } = context

    function handleFilterCatalog(filter: string) {
        handleFilter(filter)
    }

    return (
        <CatalogContainer>
            <CatalogTextContainer>
                <h1>Nossos Cafés</h1>
                <CatalogOptionsContainer>
                    <span
                    onClick={() => {handleFilterCatalog('')}}
                    >Todos
                    </span>
                    <span
                    onClick={() => handleFilterCatalog('Tradicional')}
                    >Tradicional</span>
                    <span
                    onClick={() => handleFilterCatalog('Gelado')}
                    >Gelado</span>
                    <span
                    onClick={() => handleFilterCatalog('Com Leite')}
                    >Com Leite</span>
                    <span
                    onClick={() => handleFilterCatalog('Especial')}
                    >Especial</span>
                    <span
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