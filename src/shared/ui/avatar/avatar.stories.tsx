import { ComponentMeta, ComponentStory } from '@storybook/react'

import AvatarImg from '@/shared/assets/tests/avatar.png'
import { ThemeDecorator } from '@/shared/config/storybook/theme-decorator'
import { Theme } from '@/shared/const/theme'

import { Avatar } from './avatar'

export default {
  title: 'shared/Avatar',
  component: Avatar,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Avatar>

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />

export const Primary = Template.bind({})
Primary.args = {
  size: 150,
  src: AvatarImg
}

export const PrimaryDark = Template.bind({})
PrimaryDark.args = {
  size: 150,
  src: AvatarImg
}
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const Small = Template.bind({})
Small.args = {
  size: 50,
  src: AvatarImg
}
