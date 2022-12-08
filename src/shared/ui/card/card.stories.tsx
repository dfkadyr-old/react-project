import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Theme } from '@/app/providers/theme-provider'
import { ThemeDecorator } from '@/shared/config/storybook/theme-decorator'

import { Text } from '../text'

import { Card, CardTheme } from './card'

export default {
  title: 'shared/Card',
  component: Card,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Card>

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />

export const Normal = Template.bind({})
Normal.args = {
  children: <Text title="test" text="text text" />
}

export const NormalDark = Template.bind({})
NormalDark.args = {
  children: <Text title="test" text="text text" />
}
NormalDark.decorators = [ThemeDecorator(Theme.DARK)]

export const Outlined = Template.bind({})
Outlined.args = {
  children: <Text title="test" text="text text" />,
  theme: CardTheme.OUTLINED
}

export const OutlinedDark = Template.bind({})
OutlinedDark.args = {
  children: <Text title="test" text="text text" />,
  theme: CardTheme.OUTLINED
}
OutlinedDark.decorators = [ThemeDecorator(Theme.DARK)]
