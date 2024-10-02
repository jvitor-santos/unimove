import { Form } from '@/components/ui/form'
import { Input } from '@/components/ui/input'

import { SignInCard } from './sign-in-card'
import { SignInForm } from './sign-in-form'

export default function SignIn() {
  return (
    <div className="flex size-full min-h-dvh items-center justify-center bg-primary">
      <SignInForm />
      {/* <SignInCard>
        <SignInForm />
      </SignInCard> */}
    </div>
  )
}
