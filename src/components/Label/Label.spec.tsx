import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Label } from '.'

it('should render label', async () => {
  const { getByText } = render(
    <Label>my label</Label>
  )

  expect(getByText('my label:')).toBeInTheDocument()
})

it('should render error', async () => {
  const { getByText } = render(
    <Label error="label error" />
  )

  expect(getByText('label error')).toBeInTheDocument()
})
