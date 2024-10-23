import Image from 'next/image'

import { SignUpForm } from './sign-up-form'

export default function SignUp() {
  return (
    <div className="flex size-full min-h-dvh flex-col items-center justify-center gap-14 bg-primary">
      <div className="flex flex-col items-center justify-center">
        <Image src="/logo-unimove.svg" alt="Logo" width={200} height={200} />
        <span className="text-center text-white">Crie sua conta</span>
      </div>
      <div className="flex justify-center">
        <SignUpForm />
      </div>
    </div>
  )
}
