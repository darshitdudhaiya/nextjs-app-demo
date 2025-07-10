'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const pathname = usePathname()

  const links = [
    { href: '/', label: 'Home' },
    { href: '/posts', label: 'Posts' },
    { href: '/users', label: 'Users' },
  ]

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex space-x-8 h-16">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center px-3 py-2 text-sm font-medium transition-colors ${
                pathname === link.href
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}