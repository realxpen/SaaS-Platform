'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Users, Settings, LogOut, BarChart3, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Utility for tailwind classes (can also use the one in lib/utils if available, but creating it here for simplicity or using lib/utils)
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const navItems = [
  { name: 'Dashboard', href: '/', icon: Home },
  { name: 'Analytics', href: '#analytics', icon: BarChart3 },
  { name: 'Users', href: '/users', icon: Users },
  { name: 'Settings', href: '/settings', icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <div className="lg:hidden fixed top-0 left-0 w-full h-16 bg-white border-b border-gray-200 z-50 flex items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white font-bold">
            S
          </div>
          <span className="font-semibold text-lg text-gray-900">SaaS Platform</span>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-500 hover:text-gray-700"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed lg:sticky top-0 left-0 z-40 w-64 h-screen transition-transform duration-300 ease-in-out bg-gray-900 text-gray-400",
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
      >
        <div className="flex flex-col h-full">
          <div className="h-16 flex items-center px-6 border-b border-gray-800 hidden lg:flex">
            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white font-bold">
              S
            </div>
            <span className="ml-3 font-semibold text-xl text-white">SaaS Platform</span>
          </div>

          <div className="flex-1 overflow-y-auto py-6 px-4">
            <nav className="space-y-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                      isActive
                        ? "bg-blue-600 text-white"
                        : "text-gray-400 hover:bg-gray-800 hover:text-white"
                    )}
                  >
                    <item.icon
                      className={cn(
                        "w-5 h-5 flex-shrink-0",
                        isActive ? "text-white" : "text-gray-400"
                      )}
                    />
                    {item.name}
                  </Link>
                );
              })}
            </nav>
            
            <div className="mt-8">
              <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                Your Teams
              </h3>
              <div className="space-y-1">
                {['Engineering', 'Marketing', 'Sales'].map((team, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-400 rounded-lg hover:bg-gray-800 hover:text-white"
                  >
                    <span className="w-6 h-6 rounded border border-gray-700 flex items-center justify-center text-xs text-gray-400 bg-gray-800">
                      {team[0]}
                    </span>
                    <span className="truncate">{team}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="p-4 border-t border-gray-800">
            <button className="flex items-center gap-3 px-3 py-2 w-full text-left text-sm font-medium text-gray-400 rounded-lg hover:bg-gray-800 hover:text-white transition-colors">
              <LogOut className="w-5 h-5 text-gray-400" />
              Sign out
            </button>
            
            <div className="mt-4 flex items-center gap-3 px-3">
              <div className="w-8 h-8 rounded-full bg-gray-800 overflow-hidden flex-shrink-0 relative">
                <Image
                  src="https://picsum.photos/seed/user1/100/100"
                  alt="User avatar"
                  fill
                  referrerPolicy="no-referrer"
                  className="object-cover"
                />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-medium text-white truncate">Alex Jensen</p>
                <p className="text-xs text-gray-400 truncate">alex@example.com</p>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
