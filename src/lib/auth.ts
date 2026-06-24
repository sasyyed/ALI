import Cookies from 'js-cookie'

const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'sadik.ali.bundi@gmail.com'
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'Gaib@017'

export interface AuthSession {
  email: string
  isLoggedIn: boolean
  timestamp: number
}

export const login = (email: string, password: string): boolean => {
  if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
    const session: AuthSession = {
      email,
      isLoggedIn: true,
      timestamp: Date.now(),
    }
    Cookies.set('authSession', JSON.stringify(session), { 
      expires: 7,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict'
    })
    return true
  }
  return false
}

export const logout = (): void => {
  Cookies.remove('authSession')
}

export const getSession = (): AuthSession | null => {
  const sessionCookie = Cookies.get('authSession')
  if (!sessionCookie) return null
  
  try {
    const session = JSON.parse(sessionCookie) as AuthSession
    return session.isLoggedIn ? session : null
  } catch {
    return null
  }
}

export const isAuthenticated = (): boolean => {
  return getSession() !== null
}

export const getCurrentUser = (): string | null => {
  const session = getSession()
  return session?.email || null
}
