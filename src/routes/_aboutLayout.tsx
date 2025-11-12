import { Outlet, createFileRoute } from '@tanstack/react-router'
import { NavBar } from '@/components/NavBar'
import { Footer } from '@/components/Footer'

export const Route = createFileRoute('/_aboutLayout')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="p-10 text-center">
      <NavBar />
      <Outlet />
      <Footer />
      <div className="text-sm mx-auto mt-5 text-center opacity-25">
        [About Layout]
      </div>
    </div>
  )
}
