import styled from "styled-components";

const Spacer = styled.div`
    padding: ${({ large }) => large ? '6rem' : null };
    padding: ${({ medium }) => medium ? '3rem' : null };
    padding: ${({ small }) => small ? '1rem' : null };
    padding: ${({ extraSmall }) => extraSmall ? '0.5rem' : null };
    @media (max-width: 800px)  {
        padding: ${({ large }) => large ? '3rem' : null};
    }
    @media (max-width: 480px)  {
        padding: ${({ large }) => large ? '2.5rem' : null};
        padding: ${({ medium }) => medium ? '1rem' : null};
    }
`

export default Spacer