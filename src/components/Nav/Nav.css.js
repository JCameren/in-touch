import styled from "styled-components"

export const Aside = styled.aside`
    background-color: ${({ theme }) => theme.colors.bg};
    margin: 0 0.5rem 0 0.5rem;
    border-radius: 0.375rem;
    height: 100vh;
    min-width: 65px;
    width: max-content;
    max-width: 150px;
    float: left;
`
export const NavIcon = styled.button`
    all: unset;
    font-size: ${({ theme }) => theme.fontSizes.sm};
    color: ${({ theme }) => theme.colors.primary} !important;
    display: inline-flex;
    justify-content: center;
    margin: 0.5rem 0 3.5rem 0;
`