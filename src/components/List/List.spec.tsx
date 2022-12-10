import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { List } from '.'

it('should render List', async () => {
  const { getByText } = render(
    <List.Root>
      <List.Item>item 1</List.Item>
      <List.Item>item 2</List.Item>
      <List.Item>item 3</List.Item>
    </List.Root>
  )

  expect(getByText('item 1')).toBeInTheDocument()
  expect(getByText('item 2')).toBeInTheDocument()
  expect(getByText('item 3')).toBeInTheDocument()
})

it('should render List with 1 column', async () => {
  const { getByTestId } = render(
    <List.Root>
      <List.Item>item 1</List.Item>
      <List.Item>item 2</List.Item>
      <List.Item>item 3</List.Item>
    </List.Root>
  )

  expect(getByTestId('list')).toHaveStyle('display: grid;')
  expect(getByTestId('list')).toHaveStyle('grid-template-columns: repeat(1,1fr);')
})

it('should render List with 3 column', async () => {
  const { getByTestId } = render(
    <List.Root numberOfColumns={3}>
      <List.Item>item 1</List.Item>
      <List.Item>item 2</List.Item>
      <List.Item>item 3</List.Item>
    </List.Root>
  )

  expect(getByTestId('list')).toHaveStyle('display: grid;')
  expect(getByTestId('list')).toHaveStyle('grid-template-columns: repeat(3,1fr);')
})
