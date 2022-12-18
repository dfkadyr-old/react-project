import { ComponentMeta, ComponentStory } from '@storybook/react'

import { ThemeDecorator } from '@/shared/config/storybook/theme-decorator'
import { Theme } from '@/shared/const/theme'

import { AppLink, AppLinkTheme } from './app-link'

export default {
  title: 'shared/AppLink',
  component: AppLink,
  argTypes: {
    backgroundColor: { control: 'color' }
  },
  args: {
    to: '/'
  }
} as ComponentMeta<typeof AppLink>

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'text',
  theme: AppLinkTheme.PRIMARY
}

export const Secondary = Template.bind({})
Secondary.args = {
  children: 'text',
  theme: AppLinkTheme.SECONDARY
}

export const Red = Template.bind({})
Red.args = {
  children: 'Text',
  theme: AppLinkTheme.RED
}

export const PrimaryDark = Template.bind({})
PrimaryDark.args = {
  children: 'text',
  theme: AppLinkTheme.PRIMARY
}
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const SecondaryDark = Template.bind({})
SecondaryDark.args = {
  children: 'text',
  theme: AppLinkTheme.SECONDARY
}
SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)]
