import { ComponentMeta, ComponentStory } from '@storybook/react'

import { ThemeDecorator } from '@/shared/config/storybook/theme-decorator'
import { Theme } from '@/shared/const/theme'

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
