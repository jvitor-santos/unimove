import { z } from 'zod'

// Função para validar o CPF
const isValidCPF = (cpf: string) => {
  cpf = cpf.replace(/[^\d]+/g, '') // Remove qualquer caractere que não seja número

  if (cpf.length !== 11) return false

  // Elimina CPFs inválidos conhecidos
  if (/^(\d)\1+$/.test(cpf)) return false

  let sum
  let remainder

  // Validação do primeiro dígito verificador
  sum = 0
  for (let i = 1; i <= 9; i++) {
    sum += parseInt(cpf.substring(i - 1, i)) * (11 - i)
  }
  remainder = (sum * 10) % 11
  if (remainder === 10 || remainder === 11) remainder = 0
  if (remainder !== parseInt(cpf.substring(9, 10))) return false

  // Validação do segundo dígito verificador
  sum = 0
  for (let i = 1; i <= 10; i++) {
    sum += parseInt(cpf.substring(i - 1, i)) * (12 - i)
  }
  remainder = (sum * 10) % 11
  if (remainder === 10 || remainder === 11) remainder = 0
  if (remainder !== parseInt(cpf.substring(10, 11))) return false

  return true
}

export const signUpSchema = z
  .object({
    email: z
      .string()
      .min(1, 'O email é obrigatório.')
      .email('Formato de email inválido.'),
    password: z
      .string()
      .min(1, 'A senha é obrigatória.')
      .min(6, 'A senha deve conter no mínimo 6 caracteres.'),
    confirmPassword: z.string().min(1, 'A confirmação de senha é obrigatória.'),
    name: z.string().min(1, 'O nome é obrigatório.'),
    cpf: z
      .string()
      .min(1, 'O CPF é obrigatório.')
      .refine((cpf) => isValidCPF(cpf), {
        message: 'CPF inválido.',
      }),
    phone: z.string().min(1, 'O telefone é obrigatório.'),
    accountType: z.string().min(1, 'O tipo de conta é obrigatório.'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'As senhas não correspondem.',
    path: ['confirmPassword'],
  })
