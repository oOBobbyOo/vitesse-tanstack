import { MdAdd, MdRemove } from 'react-icons/md'
import { useCount } from '@/hooks/useCount'

export function Count() {
  const { count, inc, dec } = useCount()

  return (
    <>
      <div className="inline-flex my-3">
        <button className="btn p-2! rounded-full!" onClick={dec}>
          <MdRemove size={20} />
        </button>
        <div className="inline-block m-auto min-w-15">{count}</div>
        <button className="btn p-2! rounded-full!" onClick={inc}>
          <MdAdd size={20} />
        </button>
      </div>
    </>
  )
}
