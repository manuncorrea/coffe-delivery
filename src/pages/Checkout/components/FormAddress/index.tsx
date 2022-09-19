import { MapPinLine } from 'phosphor-react'
import { HeaderRequest, InputContainer } from './styles'

export function FormAddress() {
  return (
    <>
      <HeaderRequest>
        <MapPinLine size={22} />
        <div>
          <h4>Endereço de Entrega</h4>
          <span>Informe o endereço onde deseja receber seu pedido</span>
        </div>
      </HeaderRequest>

      <input type="text" placeholder="CEP" />
      <input type="text" placeholder="Rua" />
      <InputContainer>
        <input type="number" placeholder="Número" />
        <input type="text" placeholder="Complemento" />
      </InputContainer>
      <InputContainer>
        <input type="text" placeholder="Bairro" />
        <input type="text" placeholder="Cidade" />
        <input type="text" placeholder="UF" />
      </InputContainer>
    </>
  )
}
