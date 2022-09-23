import { MapPin, Timer } from 'phosphor-react'
import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import imagemSuccess from '../../assets/illustration-success.png'
import { OrderDataType } from '../Checkout'
import {
  IconSvg,
  OrderContainer,
  SuccessContainer,
  SucessContent,
} from './styles'

interface SuccessProps {
  state: OrderDataType
}

export function Success() {
  const navigate = useNavigate()
  const { state } = useLocation() as unknown as SuccessProps

  useEffect(() => {
    if (!state) {
      navigate('/')
    }
  }, [])
  return (
    <SuccessContainer className="content">
      <div>
        <h2>Uhu! Pedido confirmado</h2>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </div>

      <SucessContent>
        <OrderContainer>
          <section>
            <IconSvg variant="purple">
              <MapPin weight="fill" size={16} />
            </IconSvg>
            <span>
              Entrega em{' '}
              <strong>
                Rua {state.street}, {state.number}
              </strong>{' '}
              {state.district} - {state.city}, {state.uf}
            </span>
          </section>

          <section>
            <IconSvg variant="yellow-dark">
              <Timer weight="fill" size={16} />
            </IconSvg>
            <span>
              Previsão de entrega <br />
              <strong>20 min - 30 min </strong>
            </span>
          </section>

          <section>
            <IconSvg variant="yellow">
              <Timer weight="fill" size={16} />
            </IconSvg>
            <span>
              Pagamento na entrega
              <br />
              <strong>Cartão de Crédito</strong>
            </span>
          </section>
        </OrderContainer>
        <img src={imagemSuccess} alt="" />
      </SucessContent>
    </SuccessContainer>
  )
}
