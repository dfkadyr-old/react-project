import { addDecorator } from '@storybook/react'
import { Theme } from '../../src/app/providers/theme-provider'
import { StyleDecorator } from '../../src/shared/config/storybook/style-decorator'
import { ThemeDecorator } from '../../src/shared/config/storybook/theme-decorator'
import { RouterDecorator } from '../../src/shared/config/storybook/router-decorator'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
}

addDecorator(StyleDecorator)
addDecorator(ThemeDecorator(Theme.LIGHT))
addDecorator(RouterDecorator)
