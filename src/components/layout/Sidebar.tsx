'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import {
  LayoutDashboard,
  Package,
  Users,
  FileText,
  Truck,
  Settings,
  X,
} from 'lucide-react'

interface SidebarProps {
  isOpen?: boolean
  onClose?: () => void
}

const menuItems = [
  {
    name: 'Dashboard',
    href: '/dashboard',
    icon: LayoutDashboard,
  },
  {
    name: 'Products',
    href: '/products',
    icon: Package,
  },
  {
    name: 'Customers',
    href: '/customers',
    icon: Users,
  },
  {
    name: 'Quotations',
    href: '/quotations',
    icon: FileText,
  },
  {
    name: 'Applications',
    href: '/applications',
    icon: Truck,
  },
  {
    name: 'Settings',
    href: '/settings',
    icon: Settings,
  },
]

export const Sidebar = ({ isOpen = true, onClose }: SidebarProps) => {
  const pathname = usePathname()

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 md:hidden z-30"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          'fixed left-0 top-0 h-screen w-64 bg-gaib-dark text-white pt-20 md:pt-0 transition-transform md:translate-x-0 md:relative md:h-auto md:flex md:flex-col z-40',
          isOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        {/* Close Button (Mobile) */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 md:hidden p-2 hover:bg-gaib-primary rounded-lg"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Logo Section */}
        <div className="hidden md:block p-6 border-b border-gaib-primary">
          <h2 className="text-xl font-bold text-gaib-secondary">GAIB</h2>
          <p className="text-xs text-gray-400">Agro Equipment</p>
        </div>

        {/* Menu Items */}
        <nav className="flex-1 overflow-y-auto py-6 md:py-4 px-3">
          <div className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className={cn(
                    'flex items-center gap-3 px-4 py-3 rounded-lg transition-colors',
                    isActive
                      ? 'bg-gaib-secondary text-gaib-dark font-semibold'
                      : 'text-gray-300 hover:bg-gaib-primary'
                  )}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </Link>
              )
            })}
          </div>
        </nav>

        {/* Footer */}
        <div className="hidden md:block p-4 border-t border-gaib-primary text-xs text-gray-400">
          <p>v1.0.0</p>
          <p className="mt-1">© 2025 GAIB Agro</p>
        </div>
      </aside>
    </>
  )
}
