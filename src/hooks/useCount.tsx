import { useState } from 'react'

export function useCount() {
  const [count, setCount] = useState(() => Math.round(Math.random() * 20))

  function inc() {
    setCount(() => count + 1)
  }

  function dec() {
    setCount(() => count - 1)
  }

  return {
    count,
    inc,
    dec,
  }
}
