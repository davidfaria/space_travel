import styled, { keyframes } from 'styled-components'

export const Wrapper = styled.button`
  position: relative;
  overflow: hidden;
  height: 44px;
  border-radius: 4px;
  border: 0;
  padding: 0 1rem;
  font-weight: 500;
  width: 100%;

  transition: Background-color 0.2s;

  &:hover:not(:disabled) {
    background-color: var(--primary-hover);
  }
  :disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  &.primary {
    color: var(--button-text);
    background-color: var(--button-primary);
    border: 1px solid var(--button-primary);
  }
  &.primary:hover {
    color: var(--button-text);
    background-color: var(--button-primary-hover);
    border: 1px solid var(--button-primary-border);
  }

  &.outline-primary {
    color: var(--button-primary);
    background-color: transparent;
    border: 1px solid var(--button-primary);
  }
  &.outline-primary:hover {
    color: var(--button-text);
    background-color: var(--button-primary);
    border: 1px solid var(--button-primary);
  }
`

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);

  border-top: 2px solid #fff;
  border-right: 2px solid #fff;
  border-bottom: 2px solid #fff;
  border-left: 4px solid #007bff;
  background: transparent;
  width: 24px;
  height: 24px;
  border-radius: 50%;

  &.loader {
    margin: 0 auto;
  }
`
