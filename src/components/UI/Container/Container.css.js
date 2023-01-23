import styled from "styled-components";

const Container = styled.div`
    margin: 0 auto;
    width: ${({ xs }) => xs ? 'max-content' : null};
`

export default Container