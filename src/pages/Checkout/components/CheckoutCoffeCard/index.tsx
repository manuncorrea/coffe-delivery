import { QuantityCoffee } from '../../../../components/QuantityCoffee'
import { CheckoutActionsContainer, Container, RomeveCoffee } from './styles'

import { Trash } from 'phosphor-react'
import { useContext } from 'react'
import {
  CartContextProps,
  OrdersCartProps,
} from '../../../../context/CoffeeCartContextProvider'
import { formatMoney } from '../../../../utils/formatMoney'

interface CheckoutCoffeCardProps {
  coffee: OrdersCartProps
}

export function CheckoutCoffeCard({ coffee }: CheckoutCoffeCardProps) {
  const { completeCurrentOrder, removeCoffeeFromCart } = useContext(CartContextProps)
  function handleIncrementquantity() {
    completeCurrentOrder(coffee.id, 'increase')
  }

  function handleDecrementquantity() {
    completeCurrentOrder(coffee.id, 'decrease')
  }

  function handleRomeveCoffee() {
    removeCoffeeFromCart(coffee.id)
  }

  const coffeeTotal = coffee.price * coffee.quantyCoffe
  const fotmatCoffeeTotal = formatMoney(coffeeTotal)
  return (
    <Container>
      <div>
        <img src={coffee.photo} alt="" />
        <div className="sub">
          <h3>{coffee.name}</h3>
          <CheckoutActionsContainer>
            <QuantityCoffee
              quantyCoffe={coffee.quantyCoffe}
              onIncrease={handleIncrementquantity}
              onDecrease={handleDecrementquantity}
            />
            <RomeveCoffee type="button" onClick={handleRomeveCoffee}>
              <Trash size={16} />
              REMOVER
            </RomeveCoffee>
          </CheckoutActionsContainer>
        </div>
      </div>
      <p>R$ {fotmatCoffeeTotal}</p>
    </Container>
  )
}
