import { Header } from '@/components/header'
import { Menus } from '@/components/menus'
import { Navigation } from '@/components/navigation'
import { Posts } from '@/components/posts'

export default function Home() {
  const typeAccount = 'Aluno'
  return (
    <div className="flex size-full min-h-dvh flex-col items-center bg-[#2550F8]">
      <Header />

      <div className="flex w-full max-w-5xl flex-1 gap-4 bg-black px-2 py-4">
        {/* <Menus /> */}

        {/* <Posts /> */}
      </div>
      <Navigation />
    </div>
  )
}
