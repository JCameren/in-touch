import styled from "styled-components";

const Input = styled.input`
  background-color: transparent;
  border-radius: 4px;
  outline: none;
  padding: 0.5rem;
  min-width: 300px;
  border: thin solid ${({ theme }) => theme.colors.textSubtle};
  color: ${({ theme }) => theme.colors.textSubtle};
  resize: none;

  &:focus {
    border: thin solid ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
    caret-color: ${({ theme }) => theme.colors.primary};
  }
`;

export default Input;
