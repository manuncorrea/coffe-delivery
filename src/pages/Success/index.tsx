import imagemSuccess from '../../assets/illustration-success.png'
import { SuccessContainer, SucessContent } from './styles'

export function Success() {
  return (
    <SuccessContainer className="content">
      <div>
        <h2>Uhu! Pedido confirmado</h2>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </div>

      <SucessContent>
        <div>aaaa</div>

        <img src={imagemSuccess} alt="" />
      </SucessContent>
    </SuccessContainer>
  )
}
