import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Theme } from 'app/providers/theme-provider'
import { StoreDecorator } from 'shared/config/storybook/store-decorator'
import { ThemeDecorator } from 'shared/config/storybook/theme-decorator'

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
Light.decorators = [StoreDecorator({ user: { authData: {} } })]

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({ user: { authData: {} } })]

export const NoAuth = Template.bind({})
NoAuth.args = {}
NoAuth.decorators = [StoreDecorator({ user: {} })]
