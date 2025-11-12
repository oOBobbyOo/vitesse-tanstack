import { Link, createFileRoute } from '@tanstack/react-router'
import { FaHandsClapping } from 'react-icons/fa6'

export const Route = createFileRoute('/user/$name')({
  component: RouteComponent,
})

function RouteComponent() {
  const { name } = Route.useParams()

  return (
    <div>
      <div className="text-yellow-300 text-4xl inline-block animate-shake-x duration-5000">
        <FaHandsClapping />
      </div>
      <h3 className="py-2 text-2xl font-500">Hi,</h3>
      <div className="text-xl">{name} :）</div>
      <div>
        <Link className="btn text-sm m-3" to="/">
          Back
        </Link>
      </div>
    </div>
  )
}
