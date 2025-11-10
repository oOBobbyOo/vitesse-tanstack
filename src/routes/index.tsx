import { createFileRoute } from '@tanstack/react-router'

import { Logos } from '@/components/Logos'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div className="px-10 pt-20 pb-10 text-center">
      <Logos />
    </div>
  )
}
