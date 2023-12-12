import { ISession } from '../types/auth.types'

export const setSession = (session: ISession | null) => {
  if (session) {
    localStorage.setItem('session', JSON.stringify(session))
  } else {
    localStorage.removeItem('session')
  }
}

export const getSession = (): ISession | null => {
  const session = localStorage.getItem('session')
  return session ? JSON.parse(session) : null
}
