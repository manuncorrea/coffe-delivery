import { CheckoutPayment } from '../CheckoutPayment'
import { CheckoutPaymentOptionsContainer } from './styles'

export function CheckoutPaymentOptions() {
  return (
    <CheckoutPaymentOptionsContainer>
      <CheckoutPayment />
      <CheckoutPayment />
      <CheckoutPayment />
    </CheckoutPaymentOptionsContainer>
  )
}
