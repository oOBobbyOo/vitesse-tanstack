import { Link, Outlet, createFileRoute } from '@tanstack/react-router'
import { Count } from '../-components/Count'
import { Footer } from '@/components/Footer'
import { NavBar } from '@/components/NavBar'

export const Route = createFileRoute('/count')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="p-10 text-center">
      <NavBar />
      <Outlet />
      <Count />
      <div>
        <Link className="btn text-sm m-3" to="/">
          Back
        </Link>
      </div>
      <Footer />
      <div className="text-sm mx-auto mt-5 text-center opacity-25">
        [Count Layout]
      </div>
    </div>
  )
}
