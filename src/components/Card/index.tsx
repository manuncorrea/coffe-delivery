import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'
import { useState } from 'react'
import { CardContainer, CartContainer, QuantityinCart } from './styles'

export interface CoffeCardProps {
  id: number
  photo: string
  categories: string[]
  name: string
  description: string
  price: number
}

interface CoffeProps {
  coffee: CoffeCardProps
}

export function Card({ coffee }: CoffeProps) {
  const [quantyCoffe, setQuantyCoffe] = useState(1)

  function hanfleIncrementQuantyCoffe() {
    setQuantyCoffe((state) => state + 1)
  }

  function handleDecrementQuantyCoffe() {
    setQuantyCoffe((state) => state - 1)
  }
  return (
    <CardContainer>
      <img src={coffee.photo} alt="" />
      <div className="category">
        {coffee.categories.map((categorie) => (
          <p key={`${coffee.id}${categorie}`}>{categorie}</p>
        ))}
      </div>
      <h2>{coffee.name}</h2>
      <span className="text-card">{coffee.description}</span>

      <CartContainer>
        <div>
          <span className="real">R$</span>
          <span>{coffee.price}</span>
        </div>

        <QuantityinCart>
          <div className="quantity-in-cart">
            <button
              onClick={handleDecrementQuantyCoffe}
              disabled={quantyCoffe <= 1}
            >
              <Minus size={14} />
            </button>{' '}
            {quantyCoffe}{' '}
            <button onClick={hanfleIncrementQuantyCoffe}>
              <Plus size={14} />
            </button>
          </div>
          <button className="shopping-cart">
            <ShoppingCartSimple weight="fill" size={14} />
          </button>
        </QuantityinCart>
      </CartContainer>
    </CardContainer>
  )
}
