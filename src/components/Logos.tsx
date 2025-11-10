import { MdAdd } from 'react-icons/md'

export function Logos() {
  return (
    <div className="text-2xl font-300 inline-flex cursor-default">
      <div className="flex flex-col items-center children:mx-auto">
        <img
          className="h-18 w-18 inline-block"
          src="/tanstack-circle-logo.png"
        />
        <span className="text-green-400 mt--2">Tanstack</span>
      </div>
      <div className="text-3xl text-gray-4 mx-4 my-auto transform transition-all-500 hover:rotate-135">
        <MdAdd />
      </div>
      <div className="flex flex-col items-center children:mx-auto">
        <img className="h-18 w-18 inline-block" src="/vite.svg" />
        <span className="text-purple-500 mt--2">Vitesse</span>
      </div>
    </div>
  )
}
