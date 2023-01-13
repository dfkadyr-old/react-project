import { ComponentMeta, ComponentStory } from '@storybook/react'

import { StoreDecorator } from '@/shared/config/storybook/store-decorator'
import { ThemeDecorator } from '@/shared/config/storybook/theme-decorator'
import { Theme } from '@/shared/const/theme'

import { LoginForm } from './login-form'

export default {
  title: 'features/LoginForm',
  component: LoginForm,
  argTypes: {
    background: { control: 'color' }
  }
} as ComponentMeta<typeof LoginForm>

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />

export const Primary = Template.bind({})
Primary.args = {}
Primary.decorators = [
  StoreDecorator({
    loginForm: { username: 'admin', password: '456' }
  })
]

export const PrimaryDark = Template.bind({})
PrimaryDark.args = {}
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]
PrimaryDark.decorators = [
  StoreDecorator({
    loginForm: { username: 'admin', password: '456' }
  })
]

export const WithError = Template.bind({})
WithError.args = {}
WithError.decorators = [
  StoreDecorator({
    loginForm: { username: 'admin', password: '456', error: 'Incorrect username or password' }
  })
]

export const Loading = Template.bind({})
Loading.args = {}
Loading.decorators = [
  StoreDecorator({
    loginForm: { isLoading: true }
  })
]
