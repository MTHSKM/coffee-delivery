import styled, { css } from "styled-components";

type IconBackgroundVariant = 'orange' | 'yellow' | 'black' | 'purple'

interface IconContainerProps {
    $variant: IconBackgroundVariant
}

const iconVariant = {
    orange: 'yellow-dark',
    yellow: 'yellow',
    black: 'base-text',
    purple: 'purple',
}


export const BannerContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5.75rem 0;
    height: 22.75rem;
    margin-bottom: 2rem;

    img {
        width: 29.75rem;
        height: 22.5rem;
    }
`


export const BannerLeftContainer = styled.div`
    width: 52%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 22.25rem;
`

export const BannerTextContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    p {
        font-size: 3rem;
        font-family: "Baloo 2", system-ui;
        font-weight: 800;
        color: ${props => props.theme['base-title']};
        line-height: 1.2;
        padding: 0 0 0.75rem 0;
    }

    span {
        font-size: 1.25rem;
        font-family: 'Roboto', sans-serif;
        color: ${props => props.theme['base-subtitle']}
    }
`

export const IconWrapperContainer = styled.div<IconContainerProps>`
    display: flex;
    align-items: center;
    border-radius: 0.375rem;
    
    gap: 12px;
    margin-bottom: 20px;

    svg {
        ${props => {
            return css`
            background-color: ${props.theme[iconVariant[props.$variant]]};
            `
        }}
        padding: 0.5rem;
        border-radius: 50%;
        width: 2rem;
        height: 2rem;
    }

    span {
        color: ${props => props.theme['base-text']};
        font-size: 1rem;
    }
`

export const BannerIconsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
`