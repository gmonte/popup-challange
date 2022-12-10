import { FormHTMLAttributes } from 'react'

import {
  Meta,
  StoryObj
} from '@storybook/react'

import { Form } from '.'

export default {
  title: 'Components/Form',
  component: Form,
  args: {
    children: [
      <input type="text" placeholder="Input 1" key="1" />,
      <input type="text" placeholder="Input 2" key="2" />
    ]
  },
  argTypes: { children: { table: { disable: true } } }
} as Meta<FormHTMLAttributes<HTMLFormElement>>

export const Default: StoryObj<FormHTMLAttributes<HTMLFormElement>> = {}
