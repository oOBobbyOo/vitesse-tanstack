import { createFileRoute } from '@tanstack/react-router'

import { Logos } from '@/components/Logos'

export const Route = createFileRoute('/_homeLayout/')({
  component: App,
})

function App() {
  return (
    <div>
      <Logos />
    </div>
  )
}
