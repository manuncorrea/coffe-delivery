import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'
import { useState } from 'react'
import { CardContainer, CartContainer, QuantityinCart } from './styles'

export interface CoffeCardProps {
  photo: string
  categories: string[]
  name: string
  description: string
  price: number
}

export function Card({
  photo,
  categories,
  name,
  description,
  price,
}: CoffeCardProps) {
  const [quantyCoffe, setQuantyCoffe] = useState(1)

  function hanfleIncrementQuantyCoffe() {
    setQuantyCoffe((state) => state + 1)
  }

  function handleDecrementQuantyCoffe() {
    setQuantyCoffe((state) => state - 1)
  }
  return (
    <CardContainer>
      <img src={photo} alt="" />
      <div className="category">
        {categories.map((categorie) => (
          <p key={name.length * Math.random()}>{categorie}</p>
        ))}
      </div>
      <h2>{name}</h2>
      <span className="text-card">{description}</span>

      <CartContainer>
        <div>
          <span className="real">R$</span>
          <span>{price}</span>
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
