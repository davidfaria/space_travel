import styled, { keyframes, css } from 'styled-components'

const loading = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

interface WrapperProps {
  align: string
}
interface SpinnerProps {
  size: number
  color: string
}

export const Wrapper = styled.div<WrapperProps>`
  /* min-height: 600px;
  height: auto; */
  display: flex;
  align-items: center;
  ${({ align }) =>
    css`
      justify-content: ${align};
    `}

  span {
    font-size: 1.8rem;
    margin-left: 16px;
  }
`
export const Spinner = styled.div<SpinnerProps>`
  width: 40px;
  height: 40px;
  border: 5px solid;

  ${({ size }) => css`
    width: ${size}px;
    height: ${size}px;
  `}

  ${({ color }) =>
    color !== ''
      ? css`
          border-color: ${color} var(--border-loading) var(--border-loading);
        `
      : css`
          border-color: var(--border-loading-active) var(--border-loading)
            var(--border-loading);
        `}

  border-radius: 50%;
  animation: ${loading} 0.7s linear infinite;
`
