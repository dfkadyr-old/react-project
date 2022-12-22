import { ComponentMeta, ComponentStory } from '@storybook/react'

import { ThemeDecorator } from '@/shared/config/storybook/theme-decorator'
import { Theme } from '@/shared/const/theme'

import { ArticleSortSelector } from './article-sort-selector'

export default {
  title: 'features/ArticleSortSelector',
  component: ArticleSortSelector,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ArticleSortSelector>

const Template: ComponentStory<typeof ArticleSortSelector> = (args) => <ArticleSortSelector {...args} />

export const Primary = Template.bind({})
Primary.args = {}

export const PrimaryDark = Template.bind({})
PrimaryDark.args = {}
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]
