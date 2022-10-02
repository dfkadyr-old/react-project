import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/theme-decorator'
import { Theme } from 'app/providers/theme-provider'

import { Sidebar } from './sidebar'

export default {
  title: 'widget/Sidebar',
  component: Sidebar,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Sidebar>

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />

export const Light = Template.bind({})
Light.args = {}

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
