import styled from "styled-components";

const Flex = styled.div`
    display: flex;
    align-items: ${({ alCenter }) => alCenter ? 'center' : null};
    align-items: ${({ flexStart }) => flexStart ? 'flex-start' : null};
    align-items: ${({ flexEnd }) => flexEnd ? 'flex-end' : null};
    flex-wrap: wrap;
    row-gap: ${({ largeRowGap }) => largeRowGap ? '3rem' : null};
    justify-content: ${({ spaceBetween }) => spaceBetween ? 'space-between': null};
    justify-content: ${({ jcCenter }) => jcCenter ? 'center': null};
    flex-direction: ${({ column }) => column ? 'column' : 'row'};
`

export default Flex