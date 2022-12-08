import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Theme } from '@/app/providers/theme-provider'
import CalendarIcon from '@/shared/assets/icons/calendar-20-20.svg'
import EyeIcon from '@/shared/assets/icons/eye-20-20.svg'
import { ThemeDecorator } from '@/shared/config/storybook/theme-decorator'

import { Icon } from './icon'

export default {
  title: 'shared/Icon',
  component: Icon,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Icon>

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />

export const Calendar = Template.bind({})
Calendar.args = {
  Svg: CalendarIcon
}

export const CalendarDark = Template.bind({})
CalendarDark.args = {
  Svg: CalendarIcon
}
CalendarDark.decorators = [ThemeDecorator(Theme.DARK)]

export const Eye = Template.bind({})
Eye.args = {
  Svg: EyeIcon
}

export const EyeDark = Template.bind({})
EyeDark.args = {
  Svg: EyeIcon
}
EyeDark.decorators = [ThemeDecorator(Theme.DARK)]
