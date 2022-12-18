import { useContext, useEffect } from 'react'

import { LOCAL_STORAGE_THEME_KEY } from '@/shared/const/localstorage'
import { Theme } from '@/shared/const/theme'

import { ThemeContext } from '../../context/theme-context'

interface UseThemeResult {
  toggleTheme: () => void
  theme: Theme
}

export function useTheme(): UseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext)

  const toggleTheme = (): void => {
    let newTheme: Theme
    switch (theme) {
      case Theme.DARK:
        newTheme = Theme.LIGHT
        break
      case Theme.LIGHT:
        newTheme = Theme.ORANGE
        break
      case Theme.ORANGE:
        newTheme = Theme.DARK
        break
      default:
        newTheme = Theme.LIGHT
    }
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    setTheme?.(newTheme)
  }

  useEffect(() => {
    document.body.className = theme ?? ''
  }, [theme])

  return { theme: theme || Theme.LIGHT, toggleTheme }
}
