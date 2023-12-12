import BaseService from './baseService'

class AuthService extends BaseService {
  constructor() {
    super('')
  }

  async login(): Promise<any> {
    return ''
  }

  async loginWithGoogle(code: string): Promise<any> {
    return this.post(`/google-auth`, {
      code,
      redirectUri: window.location.origin,
    })
  }

  async logout(): Promise<any> {
    return ''
  }
}

export default new AuthService()
