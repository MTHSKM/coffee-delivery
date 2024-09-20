import styled from 'styled-components'

export const Container = styled.div`
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

    svg {
      color: ${props => props.theme['purple']}
    }
  }
`