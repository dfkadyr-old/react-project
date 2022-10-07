import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Theme } from 'app/providers/theme-provider'
import { ThemeDecorator } from 'shared/config/storybook/theme-decorator'
import { Modal } from 'shared/ui/modal/modal'

export default {
  title: 'shared/Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />

export const Primary = Template.bind({})
Primary.args = {
  isOpen: true,
  children: 'Modal custom text'
}

export const Dark = Template.bind({})
Dark.args = {
  isOpen: true,
  children: 'Modal custom text'
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
