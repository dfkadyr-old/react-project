import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Theme } from 'app/providers/theme-provider'
import { ThemeDecorator } from 'shared/config/storybook/theme-decorator'

import { Overlay } from './overlay'

export default {
  title: 'shared/Overlay',
  component: Overlay,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Overlay>

const Template: ComponentStory<typeof Overlay> = (args) => <Overlay {...args} />

export const Primary = Template.bind({})
Primary.args = {}

export const PrimaryDark = Template.bind({})
PrimaryDark.args = {}
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]
