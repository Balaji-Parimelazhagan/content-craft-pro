import React, { createContext, useEffect, useReducer } from 'react'
import authService from '../services/authService'
import { ISession, User } from '../types/auth.types'
import { getSession, setSession } from '../utils/session'

interface AuthState {
  isAuthenticated: boolean
  isInitialized: boolean
  user: User | null
}

const initialAuthState: AuthState = {
  isAuthenticated: false,
  isInitialized: false,
  user: null,
}

const reducer = (state: AuthState, action: any): AuthState => {
  switch (action.type) {
    case 'INITIALIZE': {
      const { isAuthenticated, user } = action.payload
      return {
        ...state,
        isAuthenticated,
        isInitialized: true,
        user,
      }
    }
    case 'LOGIN': {
      const { user } = action.payload
      return {
        ...state,
        isAuthenticated: true,
        user,
      }
    }
    case 'LOGOUT': {
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      }
    }
    default: {
      return { ...state }
    }
  }
}

const AuthContext = createContext({
  ...initialAuthState,
  login: async (code: string) => {
    console.log(code)
  },
  logout: async () => {
    console.log('logout')
  },
})

export const AuthProvider: React.FC = ({ children }: any) => {
  const [state, dispatch] = useReducer(reducer, initialAuthState)

  const login = async (code: string) => {
    try {
      const response = await authService.loginWithGoogle(code)
      const session: ISession = {
        accessToken: response.access_token,
        user: response.user,
      }
      setSession(session)
      dispatch({
        type: 'LOGIN',
        payload: {
          user: session.user,
        },
      })
    } catch (error) {
      console.error(error)
    }
  }

  const logout = async () => {
    try {
      await authService.logout()
      dispatch({ type: 'LOGOUT' })
    } catch (error) {
      console.error(error)
    } finally {
      setSession(null)
    }
  }

  useEffect(() => {
    const initialize = async () => {
      try {
        const session = getSession()

        if (session) {
          setSession(session)
          dispatch({
            type: 'INITIALIZE',
            payload: {
              isAuthenticated: true,
              user: session.user,
            },
          })
        } else {
          dispatch({
            type: 'INITIALIZE',
            payload: {
              isAuthenticated: false,
              user: null,
            },
          })
        }
      } catch (err) {
        console.error(err)
        dispatch({
          type: 'INITIALIZE',
          payload: {
            isAuthenticated: false,
            user: null,
          },
        })
      }
    }

    initialize()
  }, [])

  if (!state.isInitialized) {
    return <></>
  }

  return (
    <AuthContext.Provider
      value={{
        ...state,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
