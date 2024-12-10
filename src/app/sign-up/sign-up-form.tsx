'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { doc, setDoc } from 'firebase/firestore'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { db } from '@/lib/firebase'
import SignUpService, {
  InterfaceSignUpResponse,
} from '@/services/firebase/auth/sign-up'

import { signUpSchema } from './sign-up-schema'

export function SignUpForm() {
  const signUpService = new SignUpService()
  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: '',
      cpf: '',
      email: '',
      password: '',
      confirmPassword: '',
      phone: '',
      accountType: '',
    },
  })

  async function onSubmit(values: z.infer<typeof signUpSchema>) {
    try {
      // Registra o usuário no Firebase Authentication
      const response = await signUpService.signUp({
        email: values.email,
        password: values.password,
      })

      if ('uid' in response) {
        const { uid } = response

        // Salva os dados no Firestore
        await setDoc(doc(db, 'students', uid), {
          name: values.name,
          cpf: values.cpf,
          phone: values.phone,
          accountType: values.accountType,
        })

        console.log('Usuário registrado com sucesso no Firestore!')
      } else {
        console.error('Erro ao registrar usuário:', response)
      }
    } catch (error) {
      console.error('Erro no registro:', error)
    }
  }

  return (
    <Form {...form}>
      <form
        className="flex h-auto w-full flex-col gap-4"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Nome" type="text" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="cpf"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="CPF" type="text" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Informe seu email:"
                  type="text"
                  {...field}
                />
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
                <Input
                  placeholder="Informe sua senha:"
                  type="password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Confirme sua senha:"
                  type="password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Informe seu telefone:"
                  type="text"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="accountType"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  {...field}
                >
                  <SelectTrigger>
                    <SelectValue
                      placeholder="Selecione o tipo de conta"
                      className="text-white"
                    />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="driver">Motorista</SelectItem>
                    <SelectItem value="student">Aluno</SelectItem>
                    <SelectItem value="manager">Administrador</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button className="bg-[#64E9FF]" type="submit">
          Criar e acessar
        </Button>

        <Button
          className="border-2 border-[#64E9FF] bg-transparent text-[#64E9FF]"
          type="submit"
          variant="outline"
          asChild
        >
          <Link href={'sign-in'}>Voltar para o login</Link>
        </Button>
      </form>
    </Form>
  )
}
