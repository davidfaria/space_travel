import React, { ButtonHTMLAttributes } from 'react'
import { IconBaseProps } from 'react-icons'
import * as S from './styles'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon?: React.ComponentType<IconBaseProps>
  loading?: boolean
  variant?: 'primary'
}

interface DefaultProps {
  variant?: string
}

export type ButtonProps = Props & DefaultProps

const Button: React.FC<ButtonProps> = ({
  icon: Icon,
  children,
  loading,
  variant = 'primary',
  ...rest
}) => {
  return (
    <S.Wrapper type="button" className={variant} {...rest}>
      {Icon && <Icon data-testid="button-icon" size={20} />}
      {loading ? (
        <S.Spinner data-testid="loader" className="loader" />
      ) : (
        children
      )}
    </S.Wrapper>
  )
}

export default Button
