'use client'

import { CircleUser, House, Map } from 'lucide-react'
import Link from 'next/link'

import { Button } from '../ui/button'

export function Navigation() {
  return (
    <footer className="flex h-[96px] w-full items-center justify-center gap-8 bg-[#0D274D]">
      <Button className="bg-transparent">
        <Link href="/">
          <House className="mr-2 text-white" size={36} />
        </Link>
      </Button>
      <Button className="bg-transparent">
        <Link href="/sign-in">
          <Map className="mr-2 text-white" size={36} />
        </Link>
      </Button>
      <Button className="bg-transparent">
        <Link href="/sign-up">
          <CircleUser className="mr-2 text-white" size={36} />
        </Link>
      </Button>
    </footer>
  )
}
