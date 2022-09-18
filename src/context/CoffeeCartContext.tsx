/* eslint-disable no-self-compare */
import { produce } from 'immer'
import { createContext, ReactNode, useEffect, useState } from 'react'
import { CoffeCardProps } from '../components/Card'
export interface OrdersCartProps extends CoffeCardProps {
  quantity: number
}

interface CoffeeCartContextProps {
  children: ReactNode
}

interface CartProps {
  cartOrders: OrdersCartProps[]
  cartQuantity: number
  totalPrice: number
  addCoffeeToCart: (coffee: OrdersCartProps) => void
  completeCurrentOrder: (
    cartOrdersId: number,
    type: 'increase' | 'decrease',
  ) => void
  removeCoffeeFromCart: (cartOrdersId: number) => void
  cleanCart: () => void
}

export const CartContextProps = createContext({} as CartProps)

export function CoffeeCartContextProvider({
  children,
}: CoffeeCartContextProps) {
  const [cartOrders, setCartOrders] = useState<OrdersCartProps[]>(() => {
    const storageStateCart = localStorage.getItem('coffe-delivery-1.0.0')
    if (storageStateCart) {
      return JSON.parse(storageStateCart)
    }

    return []
  })

  const cartQuantity = cartOrders.length

  const totalPrice = cartOrders.reduce((total, cartOrder) => {
    return total + cartOrder.price * cartOrder.quantity
  }, 0)

  function addCoffeeToCart(coffee: OrdersCartProps) {
    const checkIfTheCoffeeExists = cartOrders.findIndex(
      (cartOrders) => cartOrders.id === cartOrders.id,
    )

    const newCart = produce(cartOrders, (draft) => {
      if (checkIfTheCoffeeExists < 0) {
        draft.push(coffee)
      } else {
        draft[checkIfTheCoffeeExists].quantity += coffee.quantity
      }
    })

    setCartOrders(newCart)
  }

  function completeCurrentOrder(
    cartOrdersId: number,
    type: 'increase' | 'decrease',
  ) {
    const newCart = produce(cartOrders, (draft) => {
      const coffeeExistsInCart = cartOrders.findIndex(
        (cartOrder) => cartOrder.id === cartOrdersId,
      )

      if (coffeeExistsInCart >= 0) {
        const order = draft[coffeeExistsInCart]
        draft[coffeeExistsInCart].quantity =
          type === 'increase' ? order.quantity + 1 : order.quantity - 1
      }
    })

    setCartOrders(newCart)
  }

  function removeCoffeeFromCart(cartOrdersId: number) {
    const newCart = produce(cartOrders, (draft) => {
      const coffeeExistsInCart = cartOrders.findIndex(
        (cartOrders) => cartOrders.id === cartOrdersId,
      )
      if (coffeeExistsInCart >= 0) {
        draft.splice(coffeeExistsInCart, 1)
      }
    })

    setCartOrders(newCart)
  }

  function cleanCart() {
    setCartOrders([])
  }

  useEffect(() => {
    const stateJson = JSON.stringify(cartOrders)

    localStorage.setItem('coffe-delivery-1.0.0', stateJson)
  }, [cartOrders])

  return (
    <CartContextProps.Provider
      value={{
        cartOrders,
        cartQuantity,
        totalPrice,
        addCoffeeToCart,
        completeCurrentOrder,
        removeCoffeeFromCart,
        cleanCart,
      }}
    >
      {children}
    </CartContextProps.Provider>
  )
}
