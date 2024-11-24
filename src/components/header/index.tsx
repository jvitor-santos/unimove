'use client'

import { LogOut } from 'lucide-react'

import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'

export function Header() {
  return (
    <header className="flex h-auto w-full items-center justify-center border-b border-b-muted bg-card shadow-sm">
      <div className="flex h-auto w-full max-w-5xl items-center justify-between p-4">
        <div className="flex">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          </Avatar>
          <span className="text-black">Olá Aluno</span>
        </div>

        <Button className="bg-transparent">
          <LogOut className="mr-2 size-4 text-muted-foreground" />
        </Button>
      </div>
    </header>
  )
}
