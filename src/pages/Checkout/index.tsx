import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import {
  CheckoutContainer,
  CheckoutRequestsContainer,
  CheckoutSuccessContainer,
  HeaderPayment,
  HeaderRequest,
  InputContainer,
} from './styles'

export function Checkout() {
  return (
    <CheckoutContainer className="content">
      <CheckoutRequestsContainer>
        <h3>Complete seu pedido</h3>

        <div className="address">
          <HeaderRequest>
            <MapPinLine size={22} />
            <div>
              <h4>Endereço de Entrega</h4>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </div>
          </HeaderRequest>

          <input type="text" placeholder="CEP" />
          <input type="text" placeholder="Rua" />
          <InputContainer>
            <input type="number" placeholder="Número" />
            <input type="text" placeholder="Complemento" />
          </InputContainer>
          <InputContainer>
            <input type="text" placeholder="Bairro" />
            <input type="text" placeholder="Cidade" />
            <input type="text" placeholder="UF" />
          </InputContainer>
        </div>

        <div className="payment">
          <HeaderPayment>
            <CurrencyDollar size={22} />
            <div>
              <h4>Pagamento</h4>
              <span>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </span>
            </div>
          </HeaderPayment>

          <section>
            <div className="container-payment">
              <CreditCard size={16} />
              <span>CARTÃO DE CRÉDITO</span>
            </div>
            <div className="container-payment">
              <Bank size={16} />
              <span>CARTÃO DE DÉBITO</span>
            </div>
            <div className="container-payment">
              <Money size={16} />
              <span>DINHEIRO</span>
            </div>
          </section>
        </div>
      </CheckoutRequestsContainer>

      <CheckoutSuccessContainer>
        <h3>Cafés selecionados</h3>
        <div className="total">aaa</div>
      </CheckoutSuccessContainer>
    </CheckoutContainer>
  )
}
