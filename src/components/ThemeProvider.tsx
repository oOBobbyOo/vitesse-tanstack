import { createContext, useState } from 'react'
import { z } from 'zod'
import type { ReactNode } from 'react'

const themeModeSchema = z.enum(['light', 'dark', 'auto'])
const resolvedThemeSchema = z.enum(['light', 'dark'])

type ThemeMode = z.infer<typeof themeModeSchema>
type ResolvedTheme = z.infer<typeof resolvedThemeSchema>

type ThemeContextProps = {
  themeMode: ThemeMode
  resolvedTheme?: ResolvedTheme
}

type ThemeProviderProps = {
  children: ReactNode
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined)

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [themeMode] = useState<ThemeMode>('light')

  return (
    <ThemeContext.Provider value={{ themeMode }}>
      {children}
    </ThemeContext.Provider>
  )
}
