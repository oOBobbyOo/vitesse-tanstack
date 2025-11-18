import { Outlet, createFileRoute } from '@tanstack/react-router'
import { Footer } from '@/components/Footer'
import { NavBar } from '@/components/NavBar'

export const Route = createFileRoute('/posts')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="p-10 text-center">
      <NavBar />
      <Outlet />
      <Footer />
      <div className="text-sm mx-auto mt-5 text-center opacity-25">
        [Posts Layout]
      </div>
    </div>
  )
}
