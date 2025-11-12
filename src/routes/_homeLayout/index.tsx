import { createFileRoute } from '@tanstack/react-router'

import { InputEntry } from '../-components/InputEntry'
import { Logos } from '@/components/Logos'

export const Route = createFileRoute('/_homeLayout/')({
  component: App,
})

function App() {
  return (
    <div className="flex flex-col items-center">
      <Logos />
      <InputEntry />
    </div>
  )
}
