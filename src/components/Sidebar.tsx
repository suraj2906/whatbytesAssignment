'use client'
import { RiDashboardLine } from 'react-icons/ri'
import { GiSkills } from 'react-icons/gi'
import { MdWork } from 'react-icons/md'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Sidebar = () => {
  const pathname = usePathname()
  
  const menuItems = [
    {
      path: '/dashboard',
      name: 'Dashboard',
      icon: <RiDashboardLine className="w-6 h-6" />
    },
    {
      path: '/skill-test',
      name: 'Skill Test',
      icon: <GiSkills className="w-6 h-6" />
    },
    {
      path: '/internship',
      name: 'Internship',
      icon: <MdWork className="w-6 h-6" />
    }
  ]

  return (
    <div className="h-screen w-50 mt-16 pt-10 bg-white border-r border-gray-200">
      <div className="p-4">
        <nav>
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.path}>
                <Link 
                  href={item.path}
                  className={`flex items-center gap-3 p-3 rounded-lg font-bold transition-colors
                    ${pathname === item.path 
                      ? 'bg-blue-900 text-white' 
                      : 'text-gray-700 hover:bg-gray-50'
                    }`}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Sidebar
