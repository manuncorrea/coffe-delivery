import { createContext, ReactNode, useState } from 'react'
import { CoffeCardProps } from '../components/Card'

export interface ItemCartProps extends CoffeCardProps {
  item: number
}

interface CoffeeCartContextProps {
  children: ReactNode
}

interface CartProps {
  cartitem: ItemCartProps[]
  cartQuantity: number
  totalItemsInCart: number
  addCoffeeToCart: (coffee: ItemCartProps) => void
  handleCartItemQuantity: (
    cartItemId: number,
    type: 'increase' | 'decrease',
  ) => void
  removerItemCart: (cartItemId: number) => void
}

export const CartContextProps = createContext({} as CartProps)

export function CoffeeCartContext({ children }: CoffeeCartContextProps) {
  const [ carItens, setCartItens ] = useState<ItemCartProps[]>(() => {
    
  })
  return (
    <CartContextProps.Provider
      value={{
        cartitem,
        cartQuantity,
        totalItemsInCart,
        addCoffeeToCart,
        handleCartItemQuantity,
        removerItemCart,
      }}
    >
      {children}
    </CartContextProps.Provider>
  )
}
