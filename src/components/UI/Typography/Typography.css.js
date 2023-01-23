import styled from "styled-components"

export const ColorText = styled.h2`
    background-image: ${({ theme }) => theme.colors.linearGradient};
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
`