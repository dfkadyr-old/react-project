import { ComponentMeta, ComponentStory } from '@storybook/react'

import { ThemeDecorator } from '@/shared/config/storybook/theme-decorator'
import { Theme } from '@/shared/const/theme'

import { Code } from './code'

export default {
  title: 'shared/Code',
  component: Code,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Code>

const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />

export const Primary = Template.bind({})
Primary.args = {
  text: 'export default {\n' +
    '    title: \'shared/Code\',\n' +
    '    component: Code,\n' +
    '    argTypes: {\n' +
    '        backgroundColor: { control: \'color\' },\n' +
    '    },\n' +
    '} as ComponentMeta<typeof Code>;\n' +
    '\n' +
    'const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;\n' +
    '\n' +
    'export const Normal = Template.bind({});'
}

export const PrimaryDark = Template.bind({})
PrimaryDark.args = {
  text: 'export default {\n' +
    '    title: \'shared/Code\',\n' +
    '    component: Code,\n' +
    '    argTypes: {\n' +
    '        backgroundColor: { control: \'color\' },\n' +
    '    },\n' +
    '} as ComponentMeta<typeof Code>;\n' +
    '\n' +
    'const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;\n' +
    '\n' +
    'export const Normal = Template.bind({});'
}
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const PrimaryOrange = Template.bind({})
PrimaryOrange.args = {
  text: 'export default {\n' +
    '    title: \'shared/Code\',\n' +
    '    component: Code,\n' +
    '    argTypes: {\n' +
    '        backgroundColor: { control: \'color\' },\n' +
    '    },\n' +
    '} as ComponentMeta<typeof Code>;\n' +
    '\n' +
    'const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;\n' +
    '\n' +
    'export const Normal = Template.bind({});'
}
PrimaryDark.decorators = [ThemeDecorator(Theme.ORANGE)]
