import { ComponentMeta, ComponentStory } from '@storybook/react'

import { StoreDecorator } from '@/shared/config/storybook/store-decorator'
import { ThemeDecorator } from '@/shared/config/storybook/theme-decorator'
import { Theme } from '@/shared/const/theme'

import { NotificationList } from './notification-list'

export default {
  title: 'entities/Notification/NotificationList',
  component: NotificationList,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof NotificationList>

const Template: ComponentStory<typeof NotificationList> = (args) => <NotificationList {...args} />

export const Primary = Template.bind({})
Primary.args = {}
Primary.decorators = [StoreDecorator({})]
Primary.parameters = {
  mockData: [
    {
      url: `${process.env.API_URL}/notifications`,
      method: 'GET',
      status: 200,
      response: [
        {
          id: '1',
          title: 'Уведомление',
          description: 'Поставь лайк и оставь комментарий под Ulbi TV'
        },
        {
          id: '2',
          title: 'Уведомление 2',
          description: 'Поставь лайк и оставь комментарий под Ulbi TV'
        },
        {
          id: '3',
          title: 'Уведомление 3',
          description: 'Поставь лайк и оставь комментарий под Ulbi TV'
        }
      ]
    }
  ]
}

export const PrimaryDark = Template.bind({})
PrimaryDark.args = {}
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})]
PrimaryDark.parameters = {
  mockData: [
    {
      url: `${process.env.API_URL}/notifications`,
      method: 'GET',
      status: 200,
      response: [
        {
          id: '1',
          title: 'Уведомление',
          description: 'Поставь лайк и оставь комментарий под Ulbi TV'
        },
        {
          id: '2',
          title: 'Уведомление 2',
          description: 'Поставь лайк и оставь комментарий под Ulbi TV'
        },
        {
          id: '3',
          title: 'Уведомление 3',
          description: 'Поставь лайк и оставь комментарий под Ulbi TV'
        }
      ]
    }
  ]
}
