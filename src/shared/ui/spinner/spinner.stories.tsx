import { ComponentMeta, ComponentStory } from '@storybook/react'

import { ThemeDecorator } from 'shared/config/storybook/theme-decorator'
import { Theme } from 'app/providers/theme-provider'
import { Spinner } from './spinner'

export default {
  title: 'shared/Spinner',
  component: Spinner,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Spinner>

const Template: ComponentStory<typeof Spinner> = (args) => <Spinner {...args} />

export const Normal = Template.bind({})
Normal.args = {}

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
