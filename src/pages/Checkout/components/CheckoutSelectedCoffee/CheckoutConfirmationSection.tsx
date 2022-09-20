import { Button } from '../../../../components/Button'
import { CheckoutConfirmationSectionContainer } from './styles'

export function CheckoutConfirmationSection() {
  return (
    <CheckoutConfirmationSectionContainer>
      <div>
        <span>Total de itens</span>
        <span>R$ 9,90</span>
      </div>

      <div>
        <span>Entrega</span>
        <span>R$ 3,50</span>
      </div>

      <div>
        <h2>Total</h2>
        <h2>R$ 12,40</h2>
      </div>

      <Button type="submit" text="CONFIRMAR PEDIDO" />
    </CheckoutConfirmationSectionContainer>
  )
}
