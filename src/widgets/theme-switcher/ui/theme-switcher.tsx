import { memo } from 'react'

import { Theme, useTheme } from '@/app/providers/theme-provider'
import DarkIcon from '@/shared/assets/image/theme-dark.svg'
import LightIcon from '@/shared/assets/image/theme-light.svg'
import { classNames } from '@/shared/lib/class-names'
import { Button, ButtonTheme } from '@/shared/ui/button'

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps): JSX.Element => {
  const { theme, toggleTheme } = useTheme()

  console.log('theme === Theme.LIGHT', theme)

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
