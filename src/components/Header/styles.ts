import styled, { css } from 'styled-components'

interface ButtonProps {
  variant: 'purple' | 'yellow'
}

export const HeaderContainer = styled.header`
  width: 100%;
  height: 6.5rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  position: sticky;

  top: 0;
  left: 0;
  z-index: 5;

  > div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`
export const ContainerButton = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

export const ButtoCart = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 0.875rem;

  min-width: 2.3rem;
  height: 2.3rem;

  border: none;
  border-radius: 6px;
  padding: 0 0.5rem;
  position: relative;

  transition: 0.6s;

  ${({ variant }) => css`
    background: ${(props) => props.theme[`${variant}-light`]};
    color: ${(props) => props.theme[`${variant}-dark`]};
  `}

  :hover {
    ${({ variant }) => css`
      background: ${(props) => props.theme[`${variant}-dark`]};
      color: ${(props) => props.theme[`${variant}-light`]};
    `}
  }
`
