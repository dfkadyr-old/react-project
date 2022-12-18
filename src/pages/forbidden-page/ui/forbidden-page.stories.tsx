import { ComponentMeta, ComponentStory } from '@storybook/react'

import { StoreDecorator } from '@/shared/config/storybook/store-decorator'
import { ThemeDecorator } from '@/shared/config/storybook/theme-decorator'
import { Theme } from '@/shared/const/theme'

import { ForbiddenPage } from './forbidden-page'

export default {
  title: 'pages/ForbiddenPage',
  component: ForbiddenPage,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ForbiddenPage>

const Template: ComponentStory<typeof ForbiddenPage> = (args: any) => <ForbiddenPage {...args} />

export const Normal = Template.bind({})
Normal.args = {}
Normal.decorators = [StoreDecorator({})]

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})]
