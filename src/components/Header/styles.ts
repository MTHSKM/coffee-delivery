import styled from 'styled-components'

export const HeaderContainer = styled.div`
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0 1rem 0;
  margin-bottom: 5.75rem
`

export const CartContainer = styled.div`
  width: 12.06rem;
  display: flex;
  flex-direction: row;
  gap: 0.75rem;
  height: 2.375rem;
  align-items: center;

  div {
    display: flex;
    align-items: center;
    width: 8.94rem;
    height: 2.375rem;
    gap: 0.25rem;
    
    background-color: ${props => props.theme['purple-light']};
    border: 2px solid ${props => props.theme['purple-light']};
    border-radius: 0.375rem;
  }

  span{
    font-size: 0.875rem;
    color: ${props => props.theme['purple-dark']}
  }

  nav {
    background-color: ${props => props.theme['yellow-light']};
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2.375rem;
    height: 2.375rem;
    border: 2px solid ${props => props.theme['yellow-light']};
    border-radius: 0.375rem;
    position: relative;

    span {
      font-weight: bold;
      color: ${props => props.theme['white']};
      background-color: ${props => props.theme['yellow-dark']};
      border-radius: 50%;
      width: 1.25rem;
      height: 1.25rem;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: -0.5rem;
      right: -0.5rem;
    }
  }
`