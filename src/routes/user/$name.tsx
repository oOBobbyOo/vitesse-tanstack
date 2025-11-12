import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/user/$name')({
  component: RouteComponent,
})

function RouteComponent() {
  const { name } = Route.useParams()

  return <div>Hello "/user/{name}"!</div>
}
