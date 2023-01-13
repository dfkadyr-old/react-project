import { ComponentMeta, ComponentStory } from '@storybook/react'

import { ThemeDecorator } from '@/shared/config/storybook/theme-decorator'
import { Theme } from '@/shared/const/theme'

import { Select } from './select'

export default {
  title: 'shared/Select',
  component: Select,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Select>

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />

export const Primary = Template.bind({})
Primary.args = {
  label: 'Enter value',
  options: [
    {
      value: '123',
      label: 'option 1'
    },
    {
      value: '345',
      label: 'option 2'
    },
    {
      value: '678',
      label: 'option 3'
    }
  ]
}

export const PrimaryDark = Template.bind({})
PrimaryDark.args = {
  label: 'Enter value',
  options: [
    {
      value: '123',
      label: 'option 1'
    },
    {
      value: '345',
      label: 'option 2'
    },
    {
      value: '678',
      label: 'option 3'
    }
  ]
}
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]
