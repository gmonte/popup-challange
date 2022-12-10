import {
  Meta,
  StoryObj
} from '@storybook/react'

import { RadioGroup } from '.'
import { RadioGroupRootProps } from './RadioGroupRoot'

export default {
  title: 'Components/RadioGroup',
  component: RadioGroup.Root,
  args: {
    label: 'Favorite color',
    children: [
      <RadioGroup.Item label="Green" value="green" key="green" />,
      <RadioGroup.Item label="Blue" value="blue" key="blue" />,
      <RadioGroup.Item label="Yellow" value="yellow" key="yellow" />,
      <RadioGroup.Item label="Red" value="red" key="red" />
    ]
  },
  argTypes: {
    children: { table: { disable: true } },
    error: { control: { type: 'text' } }
  }
} as Meta<RadioGroupRootProps>

export const Default: StoryObj<RadioGroupRootProps> = {}
