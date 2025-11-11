import { createContext, useState } from 'react'
import { z } from 'zod'
import { createClientOnlyFn, createIsomorphicFn } from '@tanstack/react-start'
import type { ReactNode } from 'react'
import { THEME_COLORS } from '@/constants'

const themeModeSchema = z.enum(['light', 'dark', 'auto'])
const resolvedThemeSchema = z.enum(['light', 'dark'])
const themeKey = 'theme'

type ThemeMode = z.infer<typeof themeModeSchema>
type ResolvedTheme = z.infer<typeof resolvedThemeSchema>

const getStoredThemeMode = createIsomorphicFn()
  .server((): ThemeMode => 'auto')
  .client((): ThemeMode => {
    try {
      const storedTheme = localStorage.getItem(themeKey)
      return themeModeSchema.parse(storedTheme)
    } catch {
      return 'auto'
    }
  })

const setStoredThemeMode = createClientOnlyFn((theme: ThemeMode) => {
  try {
    const parsedTheme = themeModeSchema.parse(theme)
    localStorage.setItem(themeKey, parsedTheme)
  } catch {}
})

const getSystemTheme = createIsomorphicFn()
  .server((): ResolvedTheme => 'light')
  .client((): ResolvedTheme => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'
  })

const updateThemeClass = createClientOnlyFn((themeMode: ThemeMode) => {
  const root = document.documentElement
  root.classList.remove('light', 'dark', 'auto')
  const newTheme = themeMode === 'auto' ? getSystemTheme() : themeMode
  root.classList.add(newTheme)

  if (themeMode === 'auto') {
    root.classList.add('auto')
  }

  const metaThemeColor = document.querySelector('meta[name="theme-color"]')
  if (metaThemeColor) {
    metaThemeColor.setAttribute(
      'content',
      newTheme === 'dark' ? THEME_COLORS.dark : THEME_COLORS.light,
    )
  }
})

const getNextTheme = createClientOnlyFn((current: ThemeMode): ThemeMode => {
  const themes: Array<ThemeMode> =
    getSystemTheme() === 'dark'
      ? ['auto', 'light', 'dark']
      : ['auto', 'dark', 'light']
  return themes[(themes.indexOf(current) + 1) % themes.length]
})

type ThemeContextProps = {
  themeMode: ThemeMode
  resolvedTheme: ResolvedTheme
  setTheme: (theme: ThemeMode) => void
  toggleMode: () => void
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined)

type ThemeProviderProps = {
  children: ReactNode
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [themeMode, setThemeMode] = useState<ThemeMode>(getStoredThemeMode)

  const resolvedTheme = themeMode === 'auto' ? getSystemTheme() : themeMode

  const setTheme = (newTheme: ThemeMode) => {
    setThemeMode(newTheme)
    setStoredThemeMode(newTheme)
    updateThemeClass(newTheme)
  }

  const toggleMode = () => {
    setTheme(getNextTheme(themeMode))
  }

  return (
    <ThemeContext.Provider
      value={{ themeMode, resolvedTheme, setTheme, toggleMode }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
