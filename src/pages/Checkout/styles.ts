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
  }

  .payment {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    width: 40rem;
    height: 12.938rem;

    padding: 2.5rem;
    gap: 2rem;

    background: ${(props) => props.theme['base-card']};
    border-radius: 6px;
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
  }
`
