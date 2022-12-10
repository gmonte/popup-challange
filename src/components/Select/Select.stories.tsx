import {
  Meta,
  StoryObj
} from '@storybook/react'

import { Select } from '.'
import { SelectRootProps } from './SelectRoot'

export default {
  title: 'Components/Select',
  component: Select.Root,
  args: {
    label: 'Favorite color',
    children: [
      <Select.Option value="green" key="green">
        Green
      </Select.Option>,
      <Select.Option value="blue" key="blue">
        Blue
      </Select.Option>,
      <Select.Option value="yellow" key="yellow">
        Yellow
      </Select.Option>,
      <Select.Option value="red" key="red">
        Red
      </Select.Option>
    ]
  },
  argTypes: {
    children: { table: { disable: true } },
    error: { control: { type: 'text' } }
  }
} as Meta<SelectRootProps>

export const Default: StoryObj<SelectRootProps> = {}
