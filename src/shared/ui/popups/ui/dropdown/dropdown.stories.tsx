import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Theme } from 'app/providers/theme-provider'
import { ThemeDecorator } from 'shared/config/storybook/theme-decorator'

import { Button } from '../../../button'

import { Dropdown } from './dropdown'

export default {
  title: 'shared/popups/Dropdown',
  component: Dropdown,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Dropdown>

const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />

export const Primary = Template.bind({})
Primary.args = {
  trigger: <Button>Open</Button>,
  items: [
    {
      content: 'first'
    },
    {
      content: 'second'
    },
    {
      content: 'third'
    }
  ]
}

export const PrimaryDark = Template.bind({})
PrimaryDark.args = {
  trigger: <Button>Open</Button>,
  items: [
    {
      content: 'first'
    },
    {
      content: 'second'
    },
    {
      content: 'third'
    }
  ]
}
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]
