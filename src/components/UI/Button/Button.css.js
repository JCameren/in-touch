import styled from "styled-components";
import { darkTheme } from "../../../theme/theme.css";

const Button = styled.button`
    background: ${({ theme }) => theme.colors.primary};
    background: ${({ secondary }) => secondary ? "transparent": null};
    padding: 0.75rem;
    color: white;
    color: ${({ secondary }) => secondary ? darkTheme.colors.primary : "null"};
    border-radius: 5px;
    border: thin solid ${({ theme }) => theme.colors.primary};
    font-size: ${({ theme }) => theme.fontSizes.md};
    transition: all 250ms ease-in-out;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-family: "Technos";

    &:hover {
        box-shadow: 0 5 15px ${({ theme }) => theme.colors.rgba};
    }
`

export default Button