import styled from 'styled-components'

export const CheckoutPaymentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  padding: 0 1rem;
  gap: 0.75rem;

  border: 1px solid ${(props) => props.theme['base-button']};
  border-radius: 6px;

  height: 3rem;

  font-size: 0.75rem;
  transition: 0.4s;

  svg {
    color: ${(props) => props.theme.purple};
  }

  &:hover {
    background: ${(props) => props.theme['base-hover']};
  }

  user-select: none;
`
