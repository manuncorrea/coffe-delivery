import { InputHTMLAttributes } from 'react'
import { InputsRequestContainer } from './styled'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string
}

export function Input(props: InputProps) {
  return (
    <InputsRequestContainer>
      <input />
    </InputsRequestContainer>
  )
}
