export interface User {
  id: string
  name: string
  email: string
  picture: string
}

export interface ISession {
  accessToken: string
  user: User
}
