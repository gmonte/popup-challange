import {
  Meta,
  StoryObj
} from '@storybook/react'

import { CheckboxGroup } from '.'
import { CheckboxGroupRootProps } from './CheckboxGroupRoot'

export default {
  title: 'Components/CheckboxGroup',
  component: CheckboxGroup.Root,
  args: {
    label: 'Favorite colors',
    children: [
      <CheckboxGroup.Item label="Green" value="green" key="green" />,
      <CheckboxGroup.Item label="Blue" value="blue" key="blue" />,
      <CheckboxGroup.Item label="Yellow" value="yellow" key="yellow" />,
      <CheckboxGroup.Item label="Red" value="red" key="red" />
    ]
  },
  argTypes: {
    children: { table: { disable: true } },
    error: { control: { type: 'text' } }
  }
} as Meta<CheckboxGroupRootProps>

export const Default: StoryObj<CheckboxGroupRootProps> = {}
