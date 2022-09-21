import styled, { css } from 'styled-components'

interface IconProps {
  variant: 'purple' | 'yellow' | 'yellow-dark'
}

export const SuccessContainer = styled.div`
  div {
    margin-bottom: 2.5rem;
    h2 {
      font-family: 'Baloo 2', sans-serif;
      font-size: 800;
      font-size: 2rem;
      color: ${(props) => props.theme['yellow-dark']};
      margin-top: 2rem;
    }

    p {
      font-weight: 400;
      font-size: 1.25rem;
      color: ${(props) => props.theme['base-subtitle']};
    }
  }
`
export const SucessContent = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
`

export const OrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 32.875rem;
  height: 16.875rem;

  border: double 1px transparent;
  border-image-slice: 1;
  border-radius: 6px 36px;
  background-image: linear-gradient(
      ${(props) => props.theme.white},
      ${(props) => props.theme.white}
    ),
    radial-gradient(circle at top left, #dbac2c, #8047f8);
  background-origin: border-box;
  background-clip: content-box, border-box;
`

export const OrderContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 3rem;

  section {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0;
    gap: 0.75rem;

    width: 22.125rem;
    height: 2.625rem;

    margin-bottom: 2rem;

    span {
      width: 310px;
      height: 42px;

      /* Text/Regular M */

      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 130%;
      /* or 21px */

      /* Base/Text */

      color: #574f4d;
    }
  }
`

export const IconContainer = styled.div<IconProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  gap: 0.5rem;

  width: 2rem;
  height: 2rem;

  border-radius: 50%;

  ${({ variant }) => css`
    background: ${(props) => props.theme[`${variant}`]};
  `}

  color: ${(props) => props.theme.white};
`
