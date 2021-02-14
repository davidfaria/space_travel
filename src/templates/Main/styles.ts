import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  width: 700px;
  margin-left: auto;
  margin-right: auto;
  max-width: 809px;
  width: 100%;
`

export const Panel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  color: rgb(255, 255, 255);
  /* background: rgba(18, 18, 20, 0.3); */
`

export const LogoInfo = styled.div`
  display: flex;
  align-self: flex-start;
  align-items: center;
  margin-bottom: 58px;
`

export const Logo = styled.img`
  width: 40px;
  height: auto;
  margin-right: 8px;
`

export const AppTitle = styled.h1`
  font-size: 1.9rem;
  font-weight: bold;
`
export const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 400;
  line-height: 3.1rem;
  margin-bottom: 16px;

  ${media.lessThan('medium')`
  font-size: 2rem;
  `}
`

export const Form = styled.form`
  max-width: 600px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;

  & > button {
    margin-left: 8px;
    flex-basis: 30%;
  }
`

export const StarShipList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

export const Navigation = styled.div`
  margin-top: 32px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > button {
    width: 80px;
  }
`
export const PageInfo = styled.span`
  font-weight: bold;
  font-size: 2rem;
`
