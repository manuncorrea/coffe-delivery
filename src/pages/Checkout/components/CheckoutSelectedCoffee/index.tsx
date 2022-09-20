import { CheckoutCoffeeCard } from '../CheckoutCoffeeCard'
import { CheckoutConfirmationSection } from './CheckoutConfirmationSection'
import {
  CheckoutSelectedCoffeeContainer,
  SelectedCoffeContainer,
} from './styles'

export function CheckoutSelectedCoffee() {
  return (
    <CheckoutSelectedCoffeeContainer>
      <h3>Cafés selecionados</h3>

      <SelectedCoffeContainer>
        <CheckoutCoffeeCard />
        <CheckoutCoffeeCard />
        <CheckoutCoffeeCard />

        <CheckoutConfirmationSection />
      </SelectedCoffeContainer>
    </CheckoutSelectedCoffeeContainer>
  )
}
