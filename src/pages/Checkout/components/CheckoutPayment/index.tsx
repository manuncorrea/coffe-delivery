import { CheckoutPaymentContainer } from './styles'

import { CreditCard } from 'phosphor-react'

export function CheckoutPayment() {
  return (
    <CheckoutPaymentContainer>
      <CreditCard size={16} />
      CARTÃO DE CREDITO
    </CheckoutPaymentContainer>
  )
}
