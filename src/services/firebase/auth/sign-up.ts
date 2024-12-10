import {
  AuthError,
  createUserWithEmailAndPassword,
  getAuth,
  UserCredential,
} from 'firebase/auth'

import { app } from '@/lib/firebase'

type InterfaceSignUpProps = {
  email: string
  password: string
}

export type InterfaceSignUpResponse = {
  token: string
  uid: string
  emailVerified: boolean
}

class SignUpService {
  private auth

  constructor() {
    this.auth = getAuth(app)
  }

  public async signUp({
    email,
    password,
  }: InterfaceSignUpProps): Promise<InterfaceSignUpResponse | AuthError> {
    try {
      const res: UserCredential = await createUserWithEmailAndPassword(
        this.auth,
        email,
        password,
      )
      const token = await res?.user?.getIdToken()
      const { uid, emailVerified } = res?.user

      return { token, uid, emailVerified }
    } catch (err) {
      const error = err as AuthError
      console.log('SignUpService error:', error)

      return error
    }
  }
}

export default SignUpService
