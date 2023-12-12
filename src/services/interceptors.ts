import axios from 'axios'
import { getSession, setSession } from '../utils/session'

const api = axios.create({
  baseURL: 'http://localhost:8080/',
  headers: {
    'Content-Type': 'application/json',
  },
})

export const handleLogout = async () => {
  try {
    api.delete(`/logout`)
  } catch (logoutError) {
    console.log('Error while logout', logoutError)
  }
  setSession(null)
  delete api.defaults.headers.common.Authorization
  window.location.href = `/login?redirectUrl=${window.location.pathname}`
}

api.interceptors.request.use(async (config) => {
  const session = getSession()
  if (session && config.headers) {
    config.headers.Authorization = session.accessToken
    api.defaults.headers.common.Authorization = session.accessToken
  }
  return config
})

api.interceptors.response.use(
  (response) => response.data,
  async (error) => {
    const session = getSession()
    if (error.response && session) {
      if (error.response.status === 401) {
        window.location.href = '/login'
      }
      if (error.response.status === 403) {
        await handleLogout()
      }
    }
    return Promise.reject(error)
  }
)

export default api
