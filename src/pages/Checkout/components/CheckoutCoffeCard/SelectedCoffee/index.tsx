import { useContext } from 'react'
import { Button } from '../../../../../components/Button'
import { CartContextProps } from '../../../../../context/CoffeeCartContextProvider'
import { formatMoney } from '../../../../../utils/formatMoney'
import { ContainerTotal } from './styles'

const deliveryFee = 3.5
export function SelectedCoffee() {
  const { cartOrdersTotal, cartQuantity } = useContext(CartContextProps)
  const cartTotal = deliveryFee + cartOrdersTotal
  const formattedOrdersTotal = formatMoney(cartOrdersTotal)
  const formattedCartTotal = formatMoney(cartTotal)
  const formattedDeliveryFee = formatMoney(deliveryFee)
  return (
    <ContainerTotal>
      <div>
        <span>Total de itens</span>
        <span>R$ {formattedOrdersTotal}</span>
      </div>

      <div>
        <span>Entrega</span>
        <span>R$ {formattedDeliveryFee}</span>
      </div>

      <div>
        <h2>Total</h2>
        <h2>R$ {formattedCartTotal}</h2>
      </div>
      <Button text="CONFIRMAR PEDIDO" disabled={cartQuantity <= 0} />
    </ContainerTotal>
  )
}
