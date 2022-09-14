import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import coffeHome from '../../assets/coffe-home.png'
import { BannerCoffe, Container } from './styles'

export function Home() {
  return (
    <BannerCoffe>
      <Container>
        <div className="text-banner">
          <span>Encontre o café perfeito para qualquer hora do dia</span>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </div>

        <div className="itens-banner">
          <ul>
            <li>
              <span>
                <ShoppingCart size={16} />
              </span>
            </li>
            <li>
              <span>
                <Package size={16} />
              </span>
            </li>
            <li>
              <span>
                <Timer size={16} />
              </span>
            </li>
            <li>
              <span>
                <Coffee size={16} />
              </span>
            </li>
          </ul>
        </div>

        <img src={coffeHome} alt="" />
      </Container>
    </BannerCoffe>
  )
}
