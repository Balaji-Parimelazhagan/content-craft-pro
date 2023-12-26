import axios from 'axios'

const api = axios.create({
  baseURL: 'https://96ca-2406-7400-ca-e0a0-d50c-c78f-8b5f-a2d5.ngrok-free.app/api/',
  headers: {
    'Content-Type': 'application/json',
  },
})

export const login = async (payload) => {
  const response = await api.post('users/login', payload)
  return response.data
}
