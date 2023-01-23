import styled from "styled-components";

const Button = styled.button`
    background: ${({ theme }) => theme.colors.linearGradient};
    padding: 0.75rem;
    color: white;
    border-radius: 5px;
    border: none;
    font-size: ${({ theme }) => theme.fontSizes.md};
    transition: all 250ms ease-in-out;

    &:hover {
        box-shadow: 0 5 15px ${({ theme }) => theme.colors.rgba};
    }
`

export default Button