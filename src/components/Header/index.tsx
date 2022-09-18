import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import logoCoffe from '../../assets/logo-coffe.svg'
import { ButtoCart, ContainerButton, HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <div className="content">
        <NavLink to="/">
          <img src={logoCoffe} alt="" />
        </NavLink>

        <ContainerButton>
          <ButtoCart variant="purple">
            <MapPin weight="fill" size={20} />
            Porto Alegre, RS
          </ButtoCart>

          <ButtoCart variant="yellow">
            <ShoppingCart weight="fill" size={20} />
            <span>1</span>
          </ButtoCart>
        </ContainerButton>
      </div>
    </HeaderContainer>
  )
}
