import { action } from '@storybook/addon-actions'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { StoreDecorator } from '@/shared/config/storybook/store-decorator'
import { ThemeDecorator } from '@/shared/config/storybook/theme-decorator'
import { Theme } from '@/shared/const/theme'

import { AddCommentForm } from './add-comment-form'

export default {
  title: 'features/AddCommentForm',
  component: AddCommentForm,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof AddCommentForm>

const Template: ComponentStory<typeof AddCommentForm> = (args) => <AddCommentForm {...args} />

export const Primary = Template.bind({})
Primary.args = {
  onSendComment: action('onSendComment')
}
Primary.decorators = [StoreDecorator({})]

export const PrimaryDark = Template.bind({})
PrimaryDark.args = {
  onSendComment: action('onSendComment')
}
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})]
