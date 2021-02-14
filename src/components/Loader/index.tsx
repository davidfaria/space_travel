import React from 'react'

import * as S from './styles'

interface LoaderProps {
  loading?: boolean
  size?: number
  color?: string
  align?: 'left' | 'center' | 'right'
  message?: string
}

const Loader = ({
  loading = false,
  size = 60,
  color = '',
  align = 'left',
  message = ''
}: LoaderProps) => {
  if (!loading) return null
  return (
    <S.Wrapper align={align}>
      <S.Spinner data-testid="loader" size={size} color={color} />
      <span>{message}</span>
    </S.Wrapper>
  )
}

export default Loader
