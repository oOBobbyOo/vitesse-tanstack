import { Link } from '@tanstack/react-router'
import { FaBookReader, FaHome, FaSortNumericDown } from 'react-icons/fa'
import { cn } from '@/utils/cn'

export function NavBar() {
  const navLinks = [
    {
      label: 'Home',
      icon: <FaHome />,
      to: '/',
    },
    {
      label: 'Count',
      icon: <FaSortNumericDown />,
      to: '/count',
    },
    {
      label: 'About',
      icon: <FaBookReader />,
      to: '/about',
    },
  ]

  const navClasses = `flex items-center justify-between px-2 py-1 rounded-lg hover:bg-gray-500/10`

  return (
    <div className="pb-10 flex justify-center gap-4">
      {navLinks.map((item, i) => {
        return (
          <Link
            to={item.to}
            key={i}
            className={cn(navClasses)}
            activeProps={{
              className: cn('font-bold! bg-gray-500/10 dark:bg-gray-500/30'),
            }}
          >
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-4 justify-between">
                {item.icon}
              </div>
              <div className="text-sm">{item.label}</div>
            </div>
          </Link>
        )
      })}
    </div>
  )
}
