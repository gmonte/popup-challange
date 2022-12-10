import {
  Meta,
  StoryObj
} from '@storybook/react'

import {
  Checkbox,
  CheckboxProps
} from '.'

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  args: { label: 'I agree' }
} as Meta<CheckboxProps>

export const Default: StoryObj<CheckboxProps> = {}
