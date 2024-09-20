import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  max-width: 72.5rem;
  margin: 0 auto;
  padding: 5rem 1.25rem;
  align-items: flex-end;
  justify-content: space-between;
  gap: 2.5rem;
  color: ${props => props.theme['base-text']};

  img {
    margin-bottom: -2.6rem;
  }
`

export const OrderContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`

export const Heading = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  h2 {
    color: ${props => props.theme['yellow-dark']};
  }

  span {
    color: ${props => props.theme['base-subtitle']};
  }
`

export const Info = styled.div`
  border: 1px solid;
  border-radius: 6px 36px;
  width: 100%;

  border-color: transparent;
  background-origin: border-box;
  background-image: ${props => `linear-gradient(to bottom right, ${props.theme['yellow']}, ${props.theme['purple']})`};
`

export const InfoContent = styled.div`
  padding: 2.5rem;
  background-color: white;
  border-radius: 6px 36px;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  > div {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    > svg {
      padding: 0.5rem;
      border-radius: 999px;
    }
  }

  > div div {
    display: flex;
    flex-direction: column;
  }
`

export const MapPinContainer = styled.div`
    svg {    
        color: ${props => props.theme['white']};
        background-color: ${props => props.theme['purple']};
    }
`
export const TimerContainer = styled.div`
    svg {    
        color: ${props => props.theme['white']};
        background-color: ${props => props.theme['yellow']};
    }
`
export const CurrencyDollarContainer = styled.div`
    svg {    
        color: ${props => props.theme['white']};
        background-color: ${props => props.theme['yellow-dark']};
    }
`