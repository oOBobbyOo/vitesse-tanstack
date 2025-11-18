import { useSuspenseQuery } from '@tanstack/react-query'
import { Link, createFileRoute } from '@tanstack/react-router'
import { postsQueryOptions } from '@/utils/posts'

export const Route = createFileRoute('/posts/')({
  loader: async ({ context }) => {
    await context.queryClient.ensureQueryData(postsQueryOptions())
  },
  head: () => ({
    meta: [{ title: 'Posts' }],
  }),
  component: RouteComponent,
})

function RouteComponent() {
  const postsQuery = useSuspenseQuery(postsQueryOptions())

  return (
    <div className="p-2 flex justify-center gap-2">
      <ul className="">
        {[...postsQuery.data].map((post) => {
          return (
            <li key={post.id} className="whitespace-nowrap">
              <Link
                to="/posts/$postId"
                params={{
                  postId: post.id,
                }}
                className="block py-2 border-b border-gray-200 dark:border-gray-700 hover:text-blue-600"
                activeProps={{ className: 'text-black font-bold' }}
              >
                <div>{post.title.substring(0, 20)}</div>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
