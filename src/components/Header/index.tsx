import { MapPin, ShoppingCart } from 'phosphor-react'
import logoCoffe from '../../assets/logo-coffe.svg'
import { ButtoCart, ContainerButton, HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer className="content">
      <div>
        <img src={logoCoffe} alt="" />

        <ContainerButton>
          <ButtoCart variant="purple">
            <MapPin weight="fill" size={20} />
            Porto Alegre, RS
          </ButtoCart>

          <ButtoCart variant="yellow">
            <ShoppingCart weight="fill" size={20} />
          </ButtoCart>
        </ContainerButton>
      </div>
    </HeaderContainer>
  )
}
