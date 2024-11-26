'use client'

import { useState } from 'react'

import { Header } from '@/components/header'
import { Navigation } from '@/components/navigation'
import { Button } from '@/components/ui/button'

export default function Home() {
  type AccountType = 'Aluno' | 'Manager' | 'Driver'
  const [typeAccount, setTypeAccount] = useState<AccountType>('Aluno')

  return (
    <div className="flex size-full min-h-dvh flex-col items-center bg-[#2550F8]">
      <Header />

      <div className="flex w-full max-w-5xl flex-1 justify-center gap-4 bg-[#2550F8] px-2 py-4">
        {typeAccount === 'Aluno' && (
          <div className="flex flex-col items-center justify-center gap-8">
            <Button className="w-72 bg-[#0D274D]">
              Definir o ponto de embarque
            </Button>
            <Button className="w-72 bg-[#0D274D]">
              Definir o ponto de desembarque
            </Button>
          </div>
        )}
        {typeAccount === 'Manager' && (
          <div className="flex flex-col items-center justify-center gap-8">
            <Button className="w-72 bg-[#0D274D]">Gerenciar turmas</Button>
            <Button className="w-72 bg-[#0D274D]">Gerenciar motoristas</Button>
          </div>
        )}
        {typeAccount === 'Driver' && (
          <div className="flex flex-col items-center justify-center gap-8">
            <Button className="w-72 bg-[#0D274D]">Minhas turmas</Button>
          </div>
        )}
      </div>
      <Navigation />
    </div>
  )
}
