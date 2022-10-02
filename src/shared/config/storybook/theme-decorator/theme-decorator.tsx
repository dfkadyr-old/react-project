import { Theme } from 'app/providers/theme-provider'
import { Story } from '@storybook/react'

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => (
  <div className={`app ${theme}`}>
    <StoryComponent />
  </div>
)
