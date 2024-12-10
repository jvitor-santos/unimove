import {
  AuthError,
  getAuth,
  signInWithEmailAndPassword,
  UserCredential,
} from 'firebase/auth'

import { app } from '@/lib/firebase'

type InterfaceSignInProps = {
  email: string
  password: string
}

export type InterfaceSignInResponse = {
  token: string
  uid: string
  emailVerified: boolean
}

class SignInService {
  private auth

  constructor() {
    this.auth = getAuth(app)
  }

  public async signIn({
    email,
    password,
  }: InterfaceSignInProps): Promise<InterfaceSignInResponse | AuthError> {
    try {
      const res: UserCredential = await signInWithEmailAndPassword(
        this.auth,
        email,
        password,
      )
      const token = await res?.user?.getIdToken()
      const { uid, emailVerified } = res?.user

      return { token, uid, emailVerified }
    } catch (err) {
      const error = err as AuthError
      console.log('SignInService error:', error)

      return error
    }
  }
}

export default SignInService
