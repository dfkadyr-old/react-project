import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Theme } from '@/app/providers/theme-provider'
import { ThemeDecorator } from '@/shared/config/storybook/theme-decorator'

import { RatingCard } from './rating-card'

export default {
  title: 'entities/RatingCard',
  component: RatingCard,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof RatingCard>

const Template: ComponentStory<typeof RatingCard> = (args) => <RatingCard {...args} />

export const Primary = Template.bind({})
Primary.args = {}

export const PrimaryDark = Template.bind({})
PrimaryDark.args = {}
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]
