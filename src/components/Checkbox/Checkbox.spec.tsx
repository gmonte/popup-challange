import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Checkbox } from '.'

it('should render label', async () => {
  const { getByText } = render(
    <Checkbox label="my checkbox" />
  )

  expect(getByText('my checkbox')).toBeInTheDocument()
})

it('should toggle checked on click', async () => {
  const id = 'test'

  const { queryByTestId, getByText } = render(
    <Checkbox
      id={id}
      label="my checkbox"
    />
  )

  const checkbox = getByText('my checkbox')

  await userEvent.click(checkbox)

  expect(queryByTestId(`${id}-checked-icon`)).toBeInTheDocument()

  await userEvent.click(checkbox)

  expect(queryByTestId(`${id}-checked-icon`)).not.toBeInTheDocument()
})
