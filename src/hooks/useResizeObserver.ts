import { useEffect, useReducer } from 'react'
import type { RefObject } from 'react'

export interface UseResizeObserverOptions {
  ref: RefObject<HTMLElement>
  selector?: (element?: HTMLElement) => any
  onResize: (rect: DOMRect) => void
}

export function useResizeObserver({
  ref,
  selector,
  onResize,
}: UseResizeObserverOptions) {
  const rerender = useReducer(() => ({}), {})[1]
  const element = selector?.(ref.current) ?? ref.current

  useEffect(() => {
    const interval = setInterval(() => {
      rerender()
    }, 500)

    return () => {
      clearInterval(interval)
    }
  }, [])

  useEffect(() => {
    if (!element) {
      return
    }

    const observer = new ResizeObserver(() => {
      onResize(element.getBoundingClientRect())
    })

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [element])
}
