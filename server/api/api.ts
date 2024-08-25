import axios from 'axios'
const BASE_URL = 'api'

export const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

export const fetchData = async (url: string, params: Record<string, any> = {}) => {
  const config = useRuntimeConfig()
  const API_KEY = config.app.apiKey

  try {
    const response = await apiClient.get(url, {
      params: { ...params, api_key: API_KEY },
    })
    return response.data
  } catch (error) {
    console.error('API Fetch Error:', error)
    throw error
  }
}
