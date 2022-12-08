import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Theme } from '@/app/providers/theme-provider'
import { ThemeDecorator } from '@/shared/config/storybook/theme-decorator'

import { Text, TextSize, TextTheme } from './text'

export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />

export const Primary = Template.bind({})
Primary.args = {
  title: 'Title lorem ipsun',
  text: 'Description Description Description Description',
  theme: TextTheme.PRIMARY
}

export const PrimaryDark = Template.bind({})
PrimaryDark.args = {
  title: 'Title lorem ipsun',
  text: 'Description Description Description Description',
  theme: TextTheme.PRIMARY
}
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const OnlyTitle = Template.bind({})
OnlyTitle.args = {
  title: 'Title lorem ipsun',
  theme: TextTheme.PRIMARY
}

export const OnlyTitleDark = Template.bind({})
OnlyTitleDark.args = {
  title: 'Title lorem ipsun',
  theme: TextTheme.PRIMARY
}
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)]

export const OnlyText = Template.bind({})
OnlyText.args = {
  text: 'Description Description Description Description',
  theme: TextTheme.PRIMARY
}

export const OnlyTextDark = Template.bind({})
OnlyTextDark.args = {
  text: 'Description Description Description Description',
  theme: TextTheme.PRIMARY
}
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)]

export const ErrorTheme = Template.bind({})
ErrorTheme.args = {
  title: 'Title lorem ipsun',
  text: 'Description Description Description Description',
  theme: TextTheme.ERROR
}

export const ErrorThemeDark = Template.bind({})
ErrorThemeDark.args = {
  title: 'Title lorem ipsun',
  text: 'Description Description Description Description',
  theme: TextTheme.ERROR
}
ErrorThemeDark.decorators = [ThemeDecorator(Theme.DARK)]

export const SizeS = Template.bind({})
SizeS.args = {
  title: 'Title lorem ipsun',
  text: 'Description Description Description Description',
  size: TextSize.S,
  theme: TextTheme.PRIMARY
}

export const SizeM = Template.bind({})
SizeM.args = {
  title: 'Title lorem ipsun',
  text: 'Description Description Description Description',
  size: TextSize.M,
  theme: TextTheme.PRIMARY
}

export const SizeL = Template.bind({})
SizeL.args = {
  title: 'Title lorem ipsun',
  text: 'Description Description Description Description',
  size: TextSize.L,
  theme: TextTheme.PRIMARY
}
