import Header from '../components/Header'
// import { ReactNode } from "react";
import './globals.css'
import { Inter } from 'next/font/google'
import StytchProvider from '@/components/StytchProvider';

const inter = Inter({ subsets: ['latin'] })


export const metadata = {
  title: 'Ipsator-blog',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StytchProvider>
          <Header />
          {children}
        </StytchProvider>
      </body>
    </html>

  )
}