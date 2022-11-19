import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Theme } from 'app/providers/theme-provider'
import { ThemeDecorator } from 'shared/config/storybook/theme-decorator'

import { ArticlesPageFilters } from './articles-page-filters'

export default {
  title: 'pages/Article/ArticlesPageFilters',
  component: ArticlesPageFilters,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ArticlesPageFilters>

const Template: ComponentStory<typeof ArticlesPageFilters> = (args) => <ArticlesPageFilters {...args} />

export const Primary = Template.bind({})
Primary.args = {}

export const PrimaryDark = Template.bind({})
PrimaryDark.args = {}
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]
