import { ComponentMeta, ComponentStory } from '@storybook/react'

import { StoreDecorator } from '@/shared/config/storybook/store-decorator'
import { ThemeDecorator } from '@/shared/config/storybook/theme-decorator'
import { Theme } from '@/shared/const/theme'

import { ArticlesPage } from './articles-page'

export default {
  title: 'pages/Article/ArticlesPage',
  component: ArticlesPage,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ArticlesPage>

const Template: ComponentStory<typeof ArticlesPage> = (args) => <ArticlesPage {...args} />

export const Primary = Template.bind({})
Primary.args = {}
Primary.story = {
  parameters: {
    loki: { skip: true }
  }
}
Primary.decorators = [StoreDecorator({})]

export const PrimaryDark = Template.bind({})
PrimaryDark.args = {}
PrimaryDark.story = {
  parameters: {
    loki: { skip: true }
  }
}
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})]
