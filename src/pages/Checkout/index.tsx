import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { useContext } from 'react'
import { CartContextProps } from '../../context/CoffeeCartContextProvider'
import { CheckoutCoffeCard } from './components/CheckoutCoffeCard'
import { SelectedCoffee } from './components/CheckoutCoffeCard/SelectedCoffee'
import { FormAddress } from './components/FormAddress'
import {
  CheckoutContainer,
  CheckoutRequestsContainer,
  CheckoutSuccessContainer,
  HeaderPayment,
} from './styles'

export function Checkout() {
  const { cartOrders } = useContext(CartContextProps)
  return (
    <CheckoutContainer className="content">
      <CheckoutRequestsContainer>
        <h3>Complete seu pedido</h3>

        <div className="address">
          <FormAddress />
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
        <div className="total">
          {cartOrders.map((item) => (
            <CheckoutCoffeCard key={item.id} coffee={item} />
          ))}

          <SelectedCoffee />
        </div>
      </CheckoutSuccessContainer>
    </CheckoutContainer>
  )
}
