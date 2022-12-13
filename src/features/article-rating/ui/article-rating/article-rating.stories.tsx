import { ComponentStory, ComponentMeta } from '@storybook/react'

import { StoreDecorator } from '@/shared/config/storybook/store-decorator'

import { ArticleRating } from './article-rating'

export default {
  title: 'features/ArticleRating',
  component: ArticleRating,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ArticleRating>

const Template: ComponentStory<typeof ArticleRating> = (args) => <ArticleRating {...args} />

export const Normal = Template.bind({})
Normal.args = {
  articleId: '1'
}
Normal.decorators = [
  StoreDecorator({
    user: {
      authData: { id: '1' }
    }
  })
]
Normal.parameters = {
  mockData: [
    {
      url: `${process.env.API_URL}/article-ratings?userId=1&articleId=1`,
      method: 'GET',
      status: 200,
      response: [
        {
          rate: 4
        }
      ]
    }
  ]
}

export const WithoutRate = Template.bind({})
WithoutRate.args = {
  articleId: '1'
}
WithoutRate.decorators = [
  StoreDecorator({
    user: {
      authData: { id: '1' }
    }
  })
]
WithoutRate.parameters = {
  mockData: [
    {
      url: `${process.env.API_URL}/article-ratings?userId=1&articleId=1`,
      method: 'GET',
      status: 200,
      response: []
    }
  ]
}
