import { Button, ThemeButton } from './button'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ThemeDecorator } from 'shared/config/storybook/theme-decorator'
import { Theme } from 'app/providers/theme-provider'

export default {
  title: 'shared/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'Text'
}

export const Clear = Template.bind({})
Clear.args = {
  children: 'Text',
  theme: ThemeButton.CLEAR
}

export const Outline = Template.bind({})
Outline.args = {
  children: 'Text',
  theme: ThemeButton.OUTLINE
}

export const OutlineDark = Template.bind({})
OutlineDark.args = {
  children: 'Text',
  theme: ThemeButton.OUTLINE
}
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)]
