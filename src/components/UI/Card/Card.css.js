import styled from "styled-components";

const Card = styled.div`
    background-color: ${({ theme }) => theme.colors.bg};
    padding: 1.5rem;
    border-radius: 3px;
    box-shadow: ${({ elevated }) => elevated ? "rgba(0, 0, 0, 0.2) 0px 18px 50px -10px" : null};
`
export default Card