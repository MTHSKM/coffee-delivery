import styled from "styled-components"

export const CatalogContainer = styled.div`
`

export const CatalogTextContainer = styled.div`
    h1 {
        color: ${props => props.theme['base-title']};
        font-weight: 800;
        font-family: 'Baloo 2', system-ui;
    }
`
export const CatalogOptionsContainer = styled.div`
    width: 85%;
    display: flex;
    justify-content: space-between;
    padding: 2rem 0 0.75rem;
    color: ${props => props.theme['base-subtitle']};

    span {
        cursor: pointer;
        padding-bottom: 0.5rem;
        border-top: 2px solid transparent;
        border-bottom: 2px solid transparent;
        transition: 0.2s;
        font-size: 1.25rem;
        font-weight: bold;

        &:hover {
            border-bottom: 2px solid ${props => props.theme['yellow']};
            color: ${props => props.theme['yellow']};
        }
    }
`

export const CatalogCardsContainer = styled.div`
    margin-top: 3.375rem;
`