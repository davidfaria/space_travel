import api from './api'

export type getStarShipsParams = {
  page?: number
}

const getStarShips = async ({ page = 1 }: getStarShipsParams) => {
  const params = {
    page
  }
  const response = await api.get('/starships', { params })
  const startships = response.data
  return startships
}

export default { getStarShips }
