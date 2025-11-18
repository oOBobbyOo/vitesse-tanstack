import { useSuspenseQuery } from '@tanstack/react-query'
import { ErrorComponent, Link, createFileRoute } from '@tanstack/react-router'
import type { ErrorComponentProps } from '@tanstack/react-router'
import { NotFound } from '@/components/NotFound'
import { postQueryOptions } from '@/utils/posts'

export const Route = createFileRoute('/posts/$postId')({
  loader: async ({ params: { postId }, context }) => {
    const data = await context.queryClient.ensureQueryData(
      postQueryOptions(postId),
    )

    return {
      title: data.title,
    }
  },
  head: ({ loaderData }) => ({
    meta: loaderData ? [{ title: loaderData.title }] : undefined,
  }),
  errorComponent: PostErrorComponent,
  notFoundComponent: () => {
    return <NotFound>Post not found</NotFound>
  },
  component: RouteComponent,
})

function PostErrorComponent({ error }: ErrorComponentProps) {
  return <ErrorComponent error={error} />
}

function RouteComponent() {
  const { postId } = Route.useParams()
  const postQuery = useSuspenseQuery(postQueryOptions(postId))

  return (
    <div className="space-y-2">
      <h4 className="text-xl font-bold underline">{postQuery.data.title}</h4>
      <div className="text-sm">{postQuery.data.body}</div>
      <div>
        <Link className="btn text-sm m-3" to="/posts">
          Back
        </Link>
      </div>
    </div>
  )
}
