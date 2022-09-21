import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import imagemSuccess from '../../assets/illustration-success.png'
import {
  IconContainer,
  OrderContainer,
  OrderContent,
  SuccessContainer,
  SucessContent
} from './styles'

export function Success() {
  return (
    <SuccessContainer className="content">
      <div>
        <h2>Uhu! Pedido confirmado</h2>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </div>

      <SucessContent>
        <OrderContainer>
          <OrderContent>
            <section>
              <IconContainer variant="purple">
                <MapPin weight="fill" size={16} />
              </IconContainer>
              <span>
                Entrega em Rua João Daniel Martinelli, 102 Farrapos - Porto
                Alegre, RS
              </span>
            </section>

            <section>
              <IconContainer variant="yellow">
                <Timer weight="fill" size={16} />
              </IconContainer>
              <span>Previsão de entrega 20 min - 30 min</span>
            </section>

            <section>
              <IconContainer variant="yellow-dark">
                <CurrencyDollar weight="fill" size={16} />
              </IconContainer>
              <span>Pagamento na entrega Cartão de Crédito</span>
            </section>
          </OrderContent>
        </OrderContainer>
        <img src={imagemSuccess} alt="" />
      </SucessContent>
    </SuccessContainer>
  )
}
