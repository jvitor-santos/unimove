'use client'

import { CircleUser, House, Map } from 'lucide-react'
import Link from 'next/link'

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'

export function Navigation() {
  return (
    <footer className="flex h-[96px] w-full bg-[#0D274D]">
      <NavigationMenu style={{ listStyleType: 'none' }}>
        <NavigationMenuItem>
          <Link href="/">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <House className="mr-2 size-4 text-white" />
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/sign-in">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <Map className="mr-2 size-4 text-white" />
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/sign-up">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <CircleUser className="mr-2 size-4 text-white" />
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenu>
    </footer>
  )
}
