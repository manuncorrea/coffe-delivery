/* eslint-disable no-unused-vars */
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import * as zod from 'zod'
import { CartContextProps } from '../../context/CoffeeCartContextProvider'
import { CheckoutForm } from './components/CheckoutForm'
import { CheckoutSelectedCoffee } from './components/CheckoutSelectedCoffee'
import { CheckoutFormContainer } from './styles'

enum PaymentMethodsProps {
  credit = 'credit',
  debit = 'debit',
  money = 'money',
}

const confirmOrderFormValidationSchema = zod.object({
  cep: zod.string().min(7, 'Informe o CEP'),
  street: zod.string().min(1, 'Informe o Rua'),
  number: zod.string().min(1, 'Informe o Número'),
  complement: zod.string(),
  district: zod.string().min(1, 'Informe o Bairro'),
  city: zod.string().min(1, 'Informe a Cidade'),
  uf: zod.string().min(1, 'Informe a UF'),
  paymentMethod: zod.nativeEnum(PaymentMethodsProps, {
    errorMap: () => {
      return { message: 'Informe o método de pagamento' }
    },
  }),
})

export type OrderDataType = zod.infer<typeof confirmOrderFormValidationSchema>

type ConfirmOrderFormData = OrderDataType

export function Checkout() {
  const confirmOrderForm = useForm<ConfirmOrderFormData>({
    resolver: zodResolver(confirmOrderFormValidationSchema),
    defaultValues: {
      paymentMethod: undefined,
    },
  })

  const { handleSubmit } = confirmOrderForm

  const navigate = useNavigate()
  const { cleanCart } = useContext(CartContextProps)

  function handleConfirmOrder(data: ConfirmOrderFormData) {
    navigate('/success', {
      state: data,
    })
    cleanCart()
  }

  return (
    <FormProvider {...confirmOrderForm}>
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
