import styled from "styled-components";

const StyledErrorMsg = styled.div`
    color: ${({ theme }) => theme.colors.textFocus};
    padding: 1rem;
    background: #c11414;
    position: fixed;
    bottom: 1.5rem;
    border-radius: 3px;
    box-shadow: ${({ elevated }) => elevated ? "rgba(0, 0, 0, 0.2) 0px 18px 50px -10px" : null};
    left: 50%;
    transform: translateX(-50%);
    z-index: 5;
`

export default StyledErrorMsg