import {
  Meta,
  StoryObj
} from '@storybook/react'

import {
  Label,
  LabelProps
} from '.'

export default {
  title: 'Components/Label',
  component: Label,
  args: { children: 'My label' }
} as Meta<LabelProps>

export const Default: StoryObj<LabelProps> = {}
