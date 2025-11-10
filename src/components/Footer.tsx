import { Link } from '@tanstack/react-router'
import { FaGithub, FaHome } from 'react-icons/fa'
import { MdLibraryBooks } from 'react-icons/md'
import { cn } from '@/utils/cn'

export function Footer() {
  const links = [
    {
      label: 'Home',
      icon: <FaHome />,
      to: '/',
    },
    {
      label: 'Tanstack',
      icon: <MdLibraryBooks />,
      to: 'https://github.com/tanstack',
    },
    {
      label: 'GitHub',
      icon: <FaGithub />,
      to: 'https://github.com/oOBobbyOo/vitesse-tanstack',
    },
  ]

  const linkClasses = `flex items-center justify-between group px-2 py-1 rounded-lg hover:bg-gray-500/10 font-black`

  return (
    <div className="text-2xl m-5 flex justify-center gap-3">
      {links.map((item, i) => {
        return (
          <Link
            to={item.to}
            key={i}
            className={cn(linkClasses, 'font-normal')}
            target={item.to.startsWith('http') ? '_blank' : undefined}
          >
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-4 justify-between">
                {item.icon}
              </div>
              <div className="hidden">{item.label}</div>
            </div>
          </Link>
        )
      })}
    </div>
  )
}
