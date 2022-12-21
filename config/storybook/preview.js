import { addDecorator } from '@storybook/react'

import { RouterDecorator } from '../../src/shared/config/storybook/router-decorator'
import { StyleDecorator } from '../../src/shared/config/storybook/style-decorator'
import { SuspenseDecorator } from '../../src/shared/config/storybook/suspense-decorator'
import { ThemeDecorator } from '../../src/shared/config/storybook/theme-decorator'
import { Theme } from '../../src/shared/const/theme'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  layout: 'fullscreen',
  themes: {
    default: 'light',
    list: [
      { name: 'light', class: Theme.LIGHT, color: '#f5f5f5' },
      { name: 'dark', class: Theme.DARK, color: '#455a64' },
      { name: 'orange', class: Theme.ORANGE, color: '#ffb74d' }
    ]
  }
}

addDecorator(StyleDecorator)
addDecorator(ThemeDecorator(Theme.LIGHT))
addDecorator(RouterDecorator)
addDecorator(SuspenseDecorator)
