import { MapPin } from 'phosphor-react'
import {
  CheckoutContainer,
  CheckoutRequestsContainer,
  CheckoutSuccessContainer,
} from './styles'

export function Checkout() {
  return (
    <CheckoutContainer className="content">
      <CheckoutRequestsContainer>
        <h3>Complete seu pedido</h3>

        <div className="address">
          <div className="title">
            <MapPin />
            <div>
              <h4>Endereço de Entrega</h4>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </div>
          </div>
        </div>

        <div className="payment">bbb</div>
      </CheckoutRequestsContainer>

      <CheckoutSuccessContainer>
        <h3>Cafés selecionados</h3>
        <div className="total">ccc</div>
      </CheckoutSuccessContainer>
    </CheckoutContainer>
  )
}
