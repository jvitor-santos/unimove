'use client'
import Image from 'next/image'

import { SignInForm } from './sign-in-form'

export default function SignIn() {
  return (
    <div className="flex size-full min-h-dvh flex-col items-center justify-center gap-28 bg-primary">
      <div className="flex  flex-col items-center justify-center">
        <Image src="/logo-unimove.svg" alt="Logo" width={200} height={200} />
        <span className="text-center text-white">Gerencie suas rotas</span>
      </div>
      <div className="flex justify-center">
        <SignInForm />
      </div>
    </div>
  )
}
