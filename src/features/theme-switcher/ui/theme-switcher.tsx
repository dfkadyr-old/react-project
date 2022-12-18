import { memo } from 'react'

import DarkIcon from '@/shared/assets/image/theme-dark.svg'
import LightIcon from '@/shared/assets/image/theme-light.svg'
import { Theme } from '@/shared/const/theme'
import { classNames } from '@/shared/lib/class-names'
import { useTheme } from '@/shared/lib/hooks/use-theme'
import { Button, ButtonTheme } from '@/shared/ui/button'

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps): JSX.Element => {
  const { theme, toggleTheme } = useTheme()

  return (
    <Button
      theme={ButtonTheme.CLEAR}
      className={classNames('', {}, [className])}
      onClick={toggleTheme}
    >
      {theme === Theme.LIGHT ? <LightIcon /> : <DarkIcon />}
    </Button>
  )
})
