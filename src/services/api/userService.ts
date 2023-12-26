import axios from 'axios'
import { IS_MOCK } from '../../constants/appConstants'
import users from '../../mocks/users'

const api = axios.create({
  baseURL: 'https://96ca-2406-7400-ca-e0a0-d50c-c78f-8b5f-a2d5.ngrok-free.app/api/',
  headers: {
    'Content-Type': 'application/json',
  },
})

export const getAllUsers = async () => {
  if (IS_MOCK) {
    return users
  }
  const response = await api.get('users')
  return response.data
}
