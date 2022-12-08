import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Theme } from '@/app/providers/theme-provider'
import { Country } from '@/entities/country'
import { Currency } from '@/entities/currency'
import { StoreDecorator } from '@/shared/config/storybook/store-decorator'
import { ThemeDecorator } from '@/shared/config/storybook/theme-decorator'

import { ProfilePage } from './profile-page'

export default {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ProfilePage>

const formData = {
  id: '1',
  username: 'admin',
  age: 22,
  country: Country.Ukraine,
  lastname: 'last',
  first: 'admin',
  currency: Currency.RUB,
  city: 'Istanbul'
}

const Template: ComponentStory<typeof ProfilePage> = () => <ProfilePage />

export const Normal = Template.bind({})
Normal.args = {}
Normal.decorators = [StoreDecorator({
  profile: {
    form: formData
  }
})]

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
  profile: {
    form: formData
  }
})]
