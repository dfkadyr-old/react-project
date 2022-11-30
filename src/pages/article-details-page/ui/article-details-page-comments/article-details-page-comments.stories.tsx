import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Theme } from 'app/providers/theme-provider'
import { ThemeDecorator } from 'shared/config/storybook/theme-decorator'

import { ArticleDetailsPageComments } from './article-details-page-comments'

export default {
  title: 'shared/ArticleDetailsPageComments',
  component: ArticleDetailsPageComments,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ArticleDetailsPageComments>

const Template: ComponentStory<typeof ArticleDetailsPageComments> = (args) => <ArticleDetailsPageComments {...args} />

export const Primary = Template.bind({})
Primary.args = {}

export const PrimaryDark = Template.bind({})
PrimaryDark.args = {}
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]
