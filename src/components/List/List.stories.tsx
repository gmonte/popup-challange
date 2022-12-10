import {
  Meta,
  StoryObj
} from '@storybook/react'

import { List } from '.'
import { ListRootProps } from './ListRoot'

export default {
  title: 'Components/List',
  component: List.Root,
  args: {
    numberOfColumns: 1,
    children: [
      <List.Item key="1">item 1</List.Item>,
      <List.Item key="2">item 2</List.Item>,
      <List.Item key="3">item 3</List.Item>,
      <List.Item key="4">item 4</List.Item>
    ]
  },
  argTypes: { children: { table: { disable: true } } }
} as Meta<ListRootProps>

export const Default: StoryObj<ListRootProps> = {}
