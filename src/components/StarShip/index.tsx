import React from 'react'
import * as S from './styles'
import { calculateStoped } from 'utils/calculateStop'

export type StarShipProps = {
  MGLT?: string
  cargo_capacity: string
  consumables: string
  cost_in_credits: string
  crew: string
  hyperdrive_rating: string
  length: string
  manufacturer: string
  max_atmosphering_speed: string
  name: string
  passengers: string
  starship_class: string
}

export type StartShipType = {
  starship: StarShipProps
  distance?: number
}

const StarShip = ({ starship, distance }: StartShipType) => {
  const stop_amount = React.useMemo(() => {
    if (!distance) return null
    return calculateStoped(
      distance,
      Number(starship.MGLT),
      starship.consumables
    )
  }, [starship, distance])

  return (
    <S.Wrapper>
      <S.ShipInfo>
        <S.Ship src="/img/rocket.png" loading="lazy" alt="Rocket Ship" />
        <S.Name>{starship.name}</S.Name>
      </S.ShipInfo>

      <S.StopInfo>
        <S.StopBoard src="/img/stop.png" loading="lazy" alt="Stop Soard" />
        <S.StopAmount>{stop_amount ? stop_amount : '*****'}</S.StopAmount>
      </S.StopInfo>
    </S.Wrapper>
  )
}

export default StarShip
