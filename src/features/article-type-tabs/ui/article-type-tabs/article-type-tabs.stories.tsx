import { ComponentMeta, ComponentStory } from '@storybook/react'

import { ArticleTypeTabs } from './article-type-tabs'

export default {
  title: 'features/ArticleTypeTabs',
  component: ArticleTypeTabs,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ArticleTypeTabs>

const Template: ComponentStory<typeof ArticleTypeTabs> = (args) => <ArticleTypeTabs {...args} />

export const Primary = Template.bind({})
Primary.args = {}
