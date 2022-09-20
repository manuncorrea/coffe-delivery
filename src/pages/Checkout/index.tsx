import { CheckoutSelectedCoffee } from './components/CheckoutSelectedCoffee'
import { CheckoutForm } from './components/CheckoutForm'
import { CheckoutFormContainer } from './styles'

export function Checkout() {
  return (
    <CheckoutFormContainer className="content">
      <CheckoutForm />
      <CheckoutSelectedCoffee />
    </CheckoutFormContainer>
  )
}
