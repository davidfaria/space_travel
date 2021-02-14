import styled from 'styled-components'

export const Wrapper = styled.div`
  background: var(--background-input);
  border-radius: 4px;
  padding: 1.2rem;
  width: 100%;
  color: #999;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  input {
    flex: 1;
    background: transparent;
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
    color: var(--text);
    &::placeholder {
      color: var(--placeholder);
    }
    &::focus {
      outline-offset: 0;
    }
  }

  svg {
    margin-right: 16px;
  }
`
