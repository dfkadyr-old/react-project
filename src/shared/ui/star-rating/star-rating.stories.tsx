import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Theme } from '@/app/providers/theme-provider'
import { ThemeDecorator } from '@/shared/config/storybook/theme-decorator'

import { StarRating } from './star-rating'

export default {
  title: 'shared/StarRating',
  component: StarRating,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof StarRating>

const Template: ComponentStory<typeof StarRating> = (args) => <StarRating {...args} />

export const Primary = Template.bind({})
Primary.args = {}

export const PrimaryDark = Template.bind({})
PrimaryDark.args = {}
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]
