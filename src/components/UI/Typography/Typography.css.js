import styled from "styled-components"

export const ColorText = styled.h2`
    color: ${({ theme }) => theme.colors.primary};
    font-family: "Metropolis-Bold";
    font-size: ${({ theme }) => theme.fontSizes.lg};
`

export const Label = styled.label`
    font-size: ${({ theme }) => theme.fontSizes.xs};
    color: ${({ theme }) => theme.colors.textSubtle};
`