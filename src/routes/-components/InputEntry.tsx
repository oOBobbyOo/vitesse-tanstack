import { useNavigate } from '@tanstack/react-router'
import { useState } from 'react'

export function InputEntry() {
  const navigate = useNavigate()

  const [name, setName] = useState('')

  const go = () => {
    if (name) {
      navigate({ to: `/user/${name}` })
    }
  }

  return (
    <>
      <input
        className="w-[250px] mt-5 px-4 py-2 rounded text-center border border-gray-200 dark:border-gray-700 bg-transparent outline-none"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="What's your name?"
      />
      <div>
        <button className="btn text-sm m-3" onClick={go}>
          GO
        </button>
      </div>
    </>
  )
}
