"use client";
import '@/styles/globals.css';
import Navbar from '@/components/Navbar';
import { usePathname } from 'next/navigation';
import { Open_Sans } from 'next/font/google';

const open_sans = Open_Sans({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: "variable"
});

export default function RootLayout({ children }) {
  const patheName = usePathname();
  return (
    <html lang="en">
      <body className={open_sans.className}>
        {patheName !== "/" ? <Navbar /> : null}
        {children}
      </body>
    </html>
  )
}
