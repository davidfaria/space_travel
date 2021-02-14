import React, { InputHTMLAttributes } from 'react'
import { IconBaseProps } from 'react-icons'
import * as S from './styles'

export type InputProps = {
  name: string
  icon: React.ComponentType<IconBaseProps>
} & InputHTMLAttributes<HTMLInputElement>

const Input = ({ name, icon: Icon, ...props }: InputProps) => {
  const inputRef = React.useRef<HTMLInputElement>(null)

  return (
    <S.Wrapper>
      {Icon && <Icon size={20} />}
      <input data-testid={name} name={name} ref={inputRef} {...props} />
    </S.Wrapper>
  )
}

export default Input
