import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Theme } from '@/app/providers/theme-provider'
import { StoreDecorator } from '@/shared/config/storybook/store-decorator'
import { ThemeDecorator } from '@/shared/config/storybook/theme-decorator'

import { NotificationItem } from './notification-item'

export default {
  title: 'entities/Notification/NotificationItem',
  component: NotificationItem,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof NotificationItem>

const Template: ComponentStory<typeof NotificationItem> = (args) => <NotificationItem {...args} />

export const Primary = Template.bind({})
Primary.args = {
  item: { title: 'test', id: '1', description: 'test test test' }
}
Primary.decorators = [StoreDecorator({})]

export const PrimaryDark = Template.bind({})
PrimaryDark.args = {
  item: { title: 'test', id: '1', description: 'test test test' }
}
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})]
