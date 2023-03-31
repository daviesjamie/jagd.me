'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()

  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  const isDark = resolvedTheme === 'dark'
  const oppositeTheme = isDark ? 'light' : 'dark'
  const toggleTheme = () => setTheme(oppositeTheme)

  return (
    <label className="absolute right-8 top-0.5 cursor-pointer">
      <input
        type="checkbox"
        className="peer appearance-none"
        onChange={toggleTheme}
        checked={!isDark}
      />
      <span
        className={
          'flex h-6 w-10 items-center rounded-full border-[1px] border-zinc-800 p-1 duration-300 ease-in-out after:h-4 after:w-4 after:rounded-full after:bg-zinc-800 after:duration-300 after:ease-in-out peer-checked:after:translate-x-3.5 dark:border-zinc-200 after:dark:bg-zinc-200'
        }
      />
    </label>
  )
}

export default ThemeToggle
