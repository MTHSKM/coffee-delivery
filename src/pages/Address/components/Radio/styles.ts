import styled from 'styled-components'

export const Container = styled.label`
  padding: 1rem;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  border-radius: 0.375rem;
  border: 1px solid transparent;
  background-color: ${props => props.theme['base-button']};
  color: ${props => props.theme['base-text']};
  text-transform: uppercase;
  transition: all 0.2s;

  &:hover {
    background-color: ${props => props.theme['base-hover']};
  }

  &[data-state='true'] {
    background-color: ${props => props.theme['purple-light']};
    border-color: ${props => props.theme['purple']};
  }

  input {
    display: none;
  }

  svg {
    color: ${props => props.theme['purple']};
  }
`