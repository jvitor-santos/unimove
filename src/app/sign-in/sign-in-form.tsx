'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'

import { signInSchema } from './sign-in-schema'

export function SignInForm() {
  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  async function onSubmit(values: z.infer<typeof signInSchema>) {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form
        className="flex h-auto w-80 flex-col justify-items-center gap-4"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormLabel className="block w-full text-center text-white">
          Acesse sua conta
        </FormLabel>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="E-mail" type="text" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Senha" type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Link
          className="ml-auto text-xs text-muted-foreground hover:underline"
          href={'/reset-password'}
        >
          Esqueceu sua senha?
        </Link>

        <Button className="bg-[#64E9FF]" type="submit">
          Acessar
        </Button>

        <div className="flex items-center gap-4">
          <Separator className="w-full shrink" />
          <span className="min-w-max text-xs text-muted-foreground">
            Não tem uma conta?
          </span>
          <Separator className="w-full shrink" />
        </div>

        <Button className="w-full" type="button" variant="outline" asChild>
          <Link href={'sign-up'}>Criar conta</Link>
        </Button>
      </form>
    </Form>
  )
}
