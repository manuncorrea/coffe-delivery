import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  margin-top: 2rem;

  h3 {
    color: ${(props) => props.theme['base-subtitle']};
    font-family: 'Baloo 2', sans-serif;
    font-weight: 700;
    font-size: 1.125rem;
    display: flex;
    align-items: center;
    line-height: 130%;
    margin-bottom: 1rem;
  }
`

export const CheckoutRequestsContainer = styled.section`
  .address {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    width: 40rem;
    height: 30.25rem;

    padding: 2.5rem;
    gap: 2rem;
    margin-bottom: 2rem;

    background: ${(props) => props.theme['base-card']};
    border-radius: 6px;

    /* Inside auto layout */
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;

    input {
      background: ${(props) => props.theme['base-input']};
      border: 1px solid ${(props) => props.theme['base-button']};
      width: 100%;
      padding: 0.75rem;
      gap: 0.25rem;

      &:focus {
        border-color: ${(props) => props.theme['yellow-dark']};
      }
    }
  }

  .payment {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    width: 40rem;
    height: 12.938rem;

    padding: 2.5rem;
    gap: 2rem;

    background: ${(props) => props.theme['base-card']};
    border-radius: 6px;

    section {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 0px;
      gap: 12px;

      width: 560px;
      height: 51px;

      .container-payment {
        display: flex;
        align-items: center;
        justify-content: center;

        gap: 0.5rem;

        padding: 1.5rem;

        width: 178.67px;
        height: 51px;
        border: 6px;

        background: ${(props) => props.theme['base-button']};

        svg {
          color: ${(props) => props.theme.purple};
        }

        span {
          font-size: 0.7rem;
        }
      }
    }
  }
`
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

export const HeaderPayment = styled(HeaderContainer)`
  svg {
    color: ${(props) => props.theme.purple};
  }
`

export const CheckoutAdress = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 40rem;
  height: 23.25rem;

  padding: 2.5rem;
  gap: 2rem;
  margin-bottom: 2rem;

  background: ${(props) => props.theme['base-card']};
  border-radius: 6px;

  /* Inside auto layout */
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
`

export const CheckoutSuccessContainer = styled.section`
  .total {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    padding: 2.5rem;
    gap: 1.5rem;

    width: 28rem;
    height: 31.125rem;

    left: 832px;

    background: ${(props) => props.theme['base-card']};
    border-radius: 6px 44px;

    img {
      width: 4rem;
      height: 4rem;
    }

    h3 {
      align-self: flex-start;
      font-weight: 700;
    }
  }
`

export const CheckoutCoffeeCard = styled.div`
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
