import { ComponentMeta, ComponentStory } from '@storybook/react'

import { ThemeDecorator } from '@/shared/config/storybook/theme-decorator'
import { Theme } from '@/shared/const/theme'

import { Skeleton } from './skeleton'

export default {
  title: 'shared/Skeleton',
  component: Skeleton,
  parameters: {
    loki: { skip: true }
  },
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Skeleton>

const Template: ComponentStory<typeof Skeleton> = (args) => <Skeleton {...args} />

export const Primary = Template.bind({})
Primary.args = {
  width: '100%',
  height: 200
}

export const PrimaryDark = Template.bind({})
PrimaryDark.args = {
  width: '100%',
  height: 200
}
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const PrimaryOrange = Template.bind({})
PrimaryOrange.args = {
  width: '100%',
  height: 200
}
PrimaryOrange.decorators = [ThemeDecorator(Theme.ORANGE)]

export const Circle = Template.bind({})
Circle.args = {
  border: '50%',
  width: 100,
  height: 100
}
