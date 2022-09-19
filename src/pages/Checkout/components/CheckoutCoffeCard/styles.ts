import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-bottom: 1px solid ${(props) => props.theme['base-button']};
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;

  > div {
    display: flex;
    align-items: center;
    gap: 1.25rem;

    img {
      width: 4rem;
      height: 4rem;
    }
    .sub {
      h3 {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-style: normal;
        font-size: 1rem;

        color: ${(props) => props.theme['base-subtitle']};
      }
    }
  }

  > p {
    align-self: flex-start;
    font-weight: 700;
  }
`

export const CheckoutActionsContainer = styled.div`
  display: flex;
  align-items: center;

  height: 2rem;
  gap: 0.5rem;
  margin-top: 0.05rem;

  > div {
    max-width: 4.5rem;
    height: 100%;
  }
`

export const RomeveCoffee = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 0.5rem;
  gap: 0.25rem;

  width: 5.688rem;
  height: 2rem;

  background: ${(props) => props.theme['base-button']};
  border: none;
  border-radius: 6px;

  flex: none;
  order: 1;
  flex-grow: 0;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 160%;

  color: ${(props) => props.theme['base-text']};

  svg {
    color: ${(props) => props.theme.purple};
  }
`

