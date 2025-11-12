import { Outlet, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/user')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="px-10 py-20 text-center">
      <Outlet />
      <div className="text-sm mx-auto mt-5 text-center opacity-25">
        [User Layout]
      </div>
    </div>
  )
}
