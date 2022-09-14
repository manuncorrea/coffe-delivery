import { MapPin, ShoppingCart } from 'phosphor-react'
import logoCoffe from '../../assets/logo-coffe.svg'
import { ButtoCart, ContainerButton, HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <div>
        <img src={logoCoffe} alt="" />

        <ContainerButton>
          <ButtoCart variant="purple">
            <MapPin size={20} />
            Porto Alegre, RS
          </ButtoCart>

          <ButtoCart variant="yellow">
            <ShoppingCart size={20} />
          </ButtoCart>
        </ContainerButton>
      </div>
    </HeaderContainer>
  )
}
