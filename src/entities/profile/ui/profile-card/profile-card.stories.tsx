import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Theme } from 'app/providers/theme-provider'
import { Country } from 'entities/country'
import { Currency } from 'entities/currency'
import { ThemeDecorator } from 'shared/config/storybook/theme-decorator'

import { ProfileCard } from './profile-card'

export default {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  argTypes: {
    backgroundColor: { control: 'color' }
  },
  args: {
    data: {
      username: 'admin',
      age: 22,
      country: Country.Ukraine,
      lastname: 'dfkadyr',
      first: 'asd',
      city: 'asf',
      currency: Currency.USD,
      avatar: 'https://toppng.com/uploads/preview/cool-avatar-transparent-image-cool-boy-avatar-11562893383qsirclznyw.png'
    }
  }
} as ComponentMeta<typeof ProfileCard>

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />

export const Primary = Template.bind({})
Primary.args = {}

export const PrimaryDark = Template.bind({})
PrimaryDark.args = {}
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const isLoading = Template.bind({})
isLoading.args = {
  isLoading: true
}

export const withError = Template.bind({})
withError.args = {
  error: 'test error'
}

export const isReadonly = Template.bind({})
isReadonly.args = {
  isReadonly: true
}
