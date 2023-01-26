import styled from "styled-components"

export const ColorText = styled.h2`
    color: ${({ theme }) => theme.colors.primary};
    font-family: "Technos";
    font-size: ${({ theme }) => theme.fontSizes.lg};
    font-size: ${({ small }) => small ? "1.5rem" : null};
`

export const Label = styled.label`
    font-size: ${({ theme }) => theme.fontSizes.xs};
    color: ${({ theme }) => theme.colors.textSubtle};
    font-family: "Technos";
`