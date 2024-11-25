'use client'

import { LogOut } from 'lucide-react'

import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'

export function Header() {
  const typeAccount = 'Aluno'
  const name = 'João'
  return (
    <header className="flex h-auto w-full items-center justify-center bg-[#0D274D] shadow-sm">
      <div className="flex h-auto w-full max-w-5xl items-center justify-between p-4">
        <div className="flex gap-3">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          </Avatar>
          <div className="flex flex-col text-white">
            <span>Olá {typeAccount}</span>
            <span>{name}</span>
          </div>
        </div>

        <Button className="bg-transparent">
          <LogOut className="mr-2 size-6 text-white" />
        </Button>
      </div>
    </header>
  )
}
