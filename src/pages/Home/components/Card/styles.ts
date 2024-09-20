import styled from "styled-components";

export const CardListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  
`

export const CardContainer = styled.div`
  background-color: ${props => props.theme['base-card']};
  padding: 0 1.25rem 1.25rem;
  border-radius: 0.375rem 2.25rem;
  width: 16rem;
  font-family: 'Baloo 2', system-ui;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  text-align: center;
`

export const CardImageContainer = styled.img`
  margin-top: -1.25rem;
  width: 7.5rem;
  height: 7.5rem;
  align-self: center;
`

export const TagContainer = styled.div`
  margin-top: 0.75rem;
  display: flex;
  align-items: center;
  align-self: center;
  gap: 0.25rem;

  span {
    padding: 0.25rem 0.5rem;
    border-radius: 6.25rem;
    background-color: ${props => props.theme['yellow-light']};
    color: ${props => props.theme['yellow-dark']};
  }
`

export const ProductNameContainer = styled.h3`
  margin-top: 1rem;

  color: ${props => props.theme['base-subtitle']};
`

export const ProductDescriptionContainer = styled.span`
  margin-top: 0.5rem;
  width: 100%;

  color: ${props => props.theme['base-label']};
`

export const ProductMenuCartContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 2rem;
`

export const ProductPriceContainer = styled.div`
  display: flex;
  align-items: baseline;
  gap: 0.125rem;

  span:first-child {
    color: ${props => props.theme['base-text']};
  }

  span:last-child {
    color: ${props => props.theme['base-text']};
  }
`

export const ProductOrderContainer = styled.div<{ $itemAdded?: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  > button {
    background-color: ${props =>
        props.$itemAdded ? props.theme['yellow-dark'] : props.theme['purple-dark']
    };

    cursor: pointer;
    transition: background-color 0.2s;
    border-radius: 0.375rem;
    padding: 0.5rem;
    display: flex;

    &:hover {
      background-color: ${props =>
        props.$itemAdded ? props.theme['yellow'] : props.theme['purple']
      };
      
      color: ${props => props.theme['purple-dark']};
    }
  }
`

export const ProductOrderInputContainer = styled.div`
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
  }
`

export const OutOfCoffee = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 1.5rem;
  
  h1 {
    font-size: 2rem;
    color: ${props => props.theme['base-subtitle']};
  }

  svg {
    color: ${props => props.theme['yellow-dark']};
  }
`