import { Trash } from 'phosphor-react'
import { QuantityCoffee } from '../../../../components/QuantityInputCoffee'
import logoCoffee from './../../../../assets/coffe-chocolate-quente.png'
import {
  ActionsContainer,
  CheckoutCoffeeCardContainer,
  RemoverButton
} from './styles'

export function CheckoutCoffeeCard() {
  return (
    <CheckoutCoffeeCardContainer>
      <div>
        <img src={logoCoffee} alt="" />
        <div>
          <h3>Coffé Tradicional</h3>
          <ActionsContainer>
            <QuantityCoffee quantyCoffe={1} />
            <RemoverButton>
              <Trash size={16} />
              Remover
            </RemoverButton>
          </ActionsContainer>
        </div>
      </div>

      <p>R$9,99</p>
    </CheckoutCoffeeCardContainer>
  )
}
