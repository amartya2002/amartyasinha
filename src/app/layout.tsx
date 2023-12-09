import './globals.css'
import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import LenisProvider from '@/components/Providers/LenisProvider'
import Header from '@/components/Header'
import ThemeProvider from '@/components/Providers/ThemeProvider';
const nunito = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Amartya',
  description: 'Building interfaces for the web.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning >
      <body className=" dark:bg-black dark:text-white">
<ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
        <Header />
        <LenisProvider >
          <main>
            {children}
            </main>
        </LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
