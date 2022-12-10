import {
  Meta,
  StoryObj
} from '@storybook/react'

import {
  Button,
  ButtonProps
} from '.'

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'lorem ipsum',
    variant: 'default'
  },
  argTypes: {
    variant: {
      options: ['default', 'primary'],
      control: { type: 'radio' }
    }
  }
} as Meta<ButtonProps>

export const Default: StoryObj<ButtonProps> = {}

export const Primary: StoryObj<ButtonProps> = { args: { variant: 'primary' } }
