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
export const NavIcon = styled.li`
    font-size: ${({ theme }) => theme.fontSizes.sm};
    color: ${({ theme }) => theme.colors.primary};
    color: ${({ active }) => active ? "#fff" : null};

    display: inline-flex;
    justify-content: center;
    margin: 0.5rem 0.375rem 2.5rem 0.375rem;
    border-radius: 4px;
    padding: 0.7rem;
    background-color: ${({ theme }) => theme.colors.bg};
    background-color: ${({ active }) => active ? "#6b17e6" : null};
    border: none;
    cursor: pointer;
    transition: all 250ms ease-in-out;


    

    .active {
        background-color: ${({ theme }) => theme.colors.primary} !important;
        color: ${({ theme }) => theme.colors.bg} !important;
    }
`