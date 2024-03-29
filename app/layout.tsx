import { ThemeProvider } from '@/components/ThemeProvider'
import ThemeToggle from '@/components/ThemeToggle'
import { Analytics } from '@vercel/analytics/react'
import localFont from 'next/font/local'
import './globals.css'

const monolisa = localFont({
  src: '../fonts/MonoLisaVariableNormal.woff2',
  display: 'swap',
  variable: '--font-monolisa',
})

export const metadata = {
  title: {
    default: 'Jamie Davies',
    template: '%s — Jamie Davies',
  },
  description:
    "Jamie Davies' personal website. Full-stack software engineer, creator and coffee-lover.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={monolisa.variable} suppressHydrationWarning>
      <body className="bg-zinc-200 font-mono font-light text-zinc-900 transition-colors duration-300 ease-in-out dark:bg-zinc-900 dark:text-zinc-200">
        <ThemeProvider attribute="class" defaultTheme="dark">
          <ThemeToggle />

          <div className="flex min-h-screen items-center justify-center">
            <div className="max-w-3xl p-4">{children}</div>
          </div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
