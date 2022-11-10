import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Theme } from 'app/providers/theme-provider'
import { ThemeDecorator } from 'shared/config/storybook/theme-decorator'
import { Text } from 'shared/ui/text'

import { Card } from './card'

export default {
  title: 'shared/Card',
  component: Card,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Card>

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: <Text title="test" text="text text" />
}

export const PrimaryDark = Template.bind({})
PrimaryDark.args = {
  children: <Text title="test" text="text text" />
}
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]
