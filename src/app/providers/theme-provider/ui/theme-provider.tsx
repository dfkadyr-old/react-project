import { FC, useEffect, useMemo, useState } from 'react'

import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from '../lib/theme-context'

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT

interface ThemeProviderProps {
  initialTheme?: Theme
}

export const ThemeProvider: FC<ThemeProviderProps> = (props) => {
  const { children, initialTheme } = props
  const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme)

  const defaultProps = useMemo(() => ({
    theme,
    setTheme
  }), [theme])

  useEffect(() => {
    document.body.className = theme
  }, [theme])

  return (
    <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>
  )
}
