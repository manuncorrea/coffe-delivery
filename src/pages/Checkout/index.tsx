import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import * as zod from 'zod'
import { CartContextProps } from '../../context/CoffeeCartContextProvider'
import { CheckoutForm } from './components/CheckoutForm'
import { CheckoutSelectedCoffee } from './components/CheckoutSelectedCoffee'
import { CheckoutFormContainer } from './styles'

const validateOrderFormSchema = zod.object({
  cep: zod.string().min(1, 'Informe o CEP'),
  street: zod.string().min(1, 'Informe o Rua'),
  number: zod.string().min(1, 'Informe o Número'),
  complement: zod.string(),
  district: zod.string().min(1, 'Informe o Bairro'),
  city: zod.string().min(1, 'Informe a Cidade'),
  uf: zod.string().min(1, 'Informe a UF'),
})

export type OrderDataType = zod.infer<typeof validateOrderFormSchema>

type ValidateOrderFormData = OrderDataType

export function Checkout() {
  const navigate = useNavigate()
  const { cleanCart } = useContext(CartContextProps)

  const validateOrderForm = useForm<ValidateOrderFormData>({
    resolver: zodResolver(validateOrderFormSchema),
  })

  const { handleSubmit } = validateOrderForm

  function handleConfirmOrder(data: ValidateOrderFormData) {
    console.log(data)
    navigate('/success', {
      state: data,
    })
    cleanCart()
  }

  return (
    <FormProvider {...validateOrderForm}>
      <CheckoutFormContainer
        className="content"
        onSubmit={handleSubmit(handleConfirmOrder)}
      >
        <CheckoutForm />
        <CheckoutSelectedCoffee />
      </CheckoutFormContainer>
    </FormProvider>
  )
}
