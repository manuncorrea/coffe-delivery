import styled from 'styled-components'

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  & input:not(:first-child) {
    margin-left: 1rem;
  }

  & input:first-child {
    width: 25%;
  }

  & input:nth-child(2) {
    width: 75%;
  }

  & input:nth-child(3) {
    width: 20%;
  }
`
export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 4.4rem;
  gap: 0.5rem;

  div {
    h4 {
      font-size: 1rem;
      font-weight: 400;
      color: ${(props) => props.theme['base-subtitle']};
      line-height: 1.3rem;
    }

    span {
      font-size: 0.875rem;
      font-weight: 400;
      color: ${(props) => props.theme['base-text']};
      line-height: 1.138rem;
    }
  }
`

export const HeaderRequest = styled(HeaderContainer)`
  svg {
    color: ${(props) => props.theme['yellow-dark']};
  }
`
