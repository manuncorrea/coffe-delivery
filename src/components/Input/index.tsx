import { InputHTMLAttributes } from 'react'
import { InputContainer } from './styled'

type InputProps = InputHTMLAttributes<HTMLInputElement>

export function Input({ ...rest }: InputProps) {
  return <InputContainer {...rest} />
}
