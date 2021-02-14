const DIA_24_HORAS = 24

type KeyValue = {
  [key: string]: number
}

const CONSUMABLES_TYPE: KeyValue = {
  years: 365,
  year: 365,
  months: 30,
  month: 30,
  weeks: 7,
  week: 7,
  days: 1,
  day: 1,
  unknown: 0
}

export const calculateStoped = (
  distance: number,
  mglt: number,
  consumables: string
) => {
  if (Number.isNaN(mglt) || consumables === 'unknown') {
    return null
  }

  const [consumableValue, consumableType] = consumables.split(' ')

  const result =
    distance /
    (mglt *
      DIA_24_HORAS *
      (Number(consumableValue) * CONSUMABLES_TYPE[consumableType]))

  return Math.trunc(result)
}
