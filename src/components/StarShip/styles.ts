import styled from 'styled-components'

export const Wrapper = styled.div`
  background: rgba(41, 41, 46, 0.9);
  border-color: rgb(41, 41, 46);
  max-width: 380px;
  width: 100%;
  height: 100px;
  padding: 16px;
  margin-bottom: 8px;
  border-radius: 4px;

  display: flex;
  justify-content: space-between;

  cursor: pointer;

  &:hover {
    background: rgb(38, 38, 43);
  }
`
export const ShipInfo = styled.div`
  display: flex;
  align-items: center;
`

export const Ship = styled.img`
  width: 32px;
  height: auto;
  margin-right: 8px;
`
export const Name = styled.strong`
  color: #fff;
  font-weight: bold;
  font-size: 1.6rem;
  text-transform: uppercase;
`

export const StopInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const StopAmount = styled.span`
  color: #fff;
  font-size: 2rem;
`
export const StopBoard = styled.img`
  width: 48px;
  height: auto;
`
