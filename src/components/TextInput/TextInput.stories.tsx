import {
  Meta,
  StoryObj
} from '@storybook/react'
import { Envelope } from 'phosphor-react'

import { TextInput } from '.'
import { TextInputRootProps } from './TextInputRoot'

export default {
  title: 'Components/TextInput',
  component: TextInput.Root,
  args: {
    children: [
      <TextInput.Icon key="icon">
        <Envelope />
      </TextInput.Icon>,
      <TextInput.Input key="input" placeholder="Type your e-mail address" />
    ]
  },
  argTypes: { children: { table: { disable: true } } }
} as Meta<TextInputRootProps>

export const Default: StoryObj<TextInputRootProps> = {}

export const WithoutIcon: StoryObj<TextInputRootProps> = { args: { children: <TextInput.Input placeholder="Type your e-mail address" /> } }
