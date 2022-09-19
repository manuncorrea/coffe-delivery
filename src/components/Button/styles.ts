import styled from 'styled-components'

export const ButtonContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  font-size: 0.875rem;
  font-weight: 700;

  width: 23rem;
  height: 2.875rem;
  padding: 0.75rem 2.8rem;

  gap: 0.5rem;

  border: none;
  border-radius: 6px;

  background: ${(props) => props.theme.yellow};
  color: ${(props) => props.theme.white};
`
