import { ComponentMeta, ComponentStory } from '@storybook/react'

import { ThemeDecorator } from '@/shared/config/storybook/theme-decorator'
import { Theme } from '@/shared/const/theme'

import { Input } from './input'

export default {
  title: 'shared/Input',
  component: Input,
  argTypes: {
    background: { control: 'color' }
  }
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />

export const Primary = Template.bind({})
Primary.args = {
  placeholder: 'Type text',
  value: '123456'
}

export const PrimaryDark = Template.bind({})
PrimaryDark.args = {
  placeholder: 'Type text',
  value: '123456'
}
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]
