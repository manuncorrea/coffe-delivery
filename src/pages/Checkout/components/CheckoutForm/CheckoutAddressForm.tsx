import { Input } from '../../../../components/Input'
import { CheckoutAddressFormContainer } from './styles'

export function CheckoutAddressForm() {
  return (
    <>
      <Input placeholder="CEP" type="number" className="cep" />
      <Input placeholder="Rua" className="street" />
      <CheckoutAddressFormContainer>
        <Input placeholder="Número" type="number" />
        <Input placeholder="Complemento" className="complement" />
      </CheckoutAddressFormContainer>
      <CheckoutAddressFormContainer>
        <Input placeholder="Bairro" />
        <Input placeholder="Cidade" />
        <Input placeholder="UF" />
      </CheckoutAddressFormContainer>
    </>
  )
}
