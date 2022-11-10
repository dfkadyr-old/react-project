import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Theme } from 'app/providers/theme-provider'
import { ThemeDecorator } from 'shared/config/storybook/theme-decorator'

import { ArticleListItem } from './article-list-item'

export default {
  title: 'shared/ArticleListItem',
  component: ArticleListItem,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ArticleListItem>

const Template: ComponentStory<typeof ArticleListItem> = (args) => <ArticleListItem {...args} />

export const Primary = Template.bind({})
Primary.args = {}

export const PrimaryDark = Template.bind({})
PrimaryDark.args = {}
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]
