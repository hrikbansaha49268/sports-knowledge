"use client"
import Navbar from '@/components/Navbar';
import '@/styles/globals.css';
import { usePathname } from 'next/navigation';

export default function RootLayout({ children }) {

  const patheName = usePathname();

  return (
    <html lang="en">
      <body>
        {patheName !== "/" ? <Navbar /> : null}
        {children}
      </body>
    </html>
  )
}
