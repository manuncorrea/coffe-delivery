import styled from 'styled-components'

export const InputContainer = styled.input`
  border-radius: 6px;
  height: 2.625rem;

  font-size: 0.75rem;
  padding: 0 0.75rem;

  border: 1px solid ${(props) => props.theme['base-button']};
  background: ${(props) => props.theme['base-input']};
  color: ${(props) => props.theme['base-text']};

  transition: 0.4s;

  &:focus {
    border-color: ${(props) => props.theme['yellow-dark']};
  }

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
  }
`
