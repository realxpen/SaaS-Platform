import type {Metadata} from 'next';
import './globals.css';
import { Sidebar } from '@/components/Sidebar';

export const metadata: Metadata = {
  title: 'SaaS Dashboard',
  description: 'A modern SaaS dashboard for managing analytics, users, and settings.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900 antialiased font-sans" suppressHydrationWarning>
        <div className="flex min-h-screen">
          <Sidebar />
          <main className="flex-1 overflow-x-hidden w-full lg:w-auto mt-16 lg:mt-0">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
