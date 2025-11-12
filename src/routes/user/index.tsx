import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/user/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <h3 className="text-2xl font-500">Hi</h3>
    </div>
  )
}
