import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Theme } from '@/app/providers/theme-provider'
import { ThemeDecorator } from '@/shared/config/storybook/theme-decorator'

import { CommentList } from './comment-list'

export default {
  title: 'entities/Comment/CommentList',
  component: CommentList,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof CommentList>

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />

export const Primary = Template.bind({})
Primary.args = {
  comments: [
    {
      id: '1',
      text: 'hello world',
      user: { id: '1', username: 'Vasya' }
    },
    {
      id: '2',
      text: 'Comment 2',
      user: { id: '1', username: 'Petya' }
    }
  ]
}

export const PrimaryDark = Template.bind({})
PrimaryDark.args = {
  comments: [
    {
      id: '1',
      text: 'hello world',
      user: { id: '1', username: 'Vasya' }
    },
    {
      id: '2',
      text: 'Comment 2',
      user: { id: '1', username: 'Petya' }
    }
  ]
}
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const Loading = Template.bind({})
Loading.args = {
  comments: [],
  isLoading: true
}
Loading.story = {
  parameters: {
    loki: { skip: true }
  }
}
