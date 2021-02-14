import axios from 'axios'

const baseURL = process.env.NEXT_PUBLIC_BASE_URL_SWAPI

console.log(baseURL)

const api = axios.create({
  baseURL
})

export default api
