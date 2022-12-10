import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Form } from '.'

it('should prevent default submit', async () => {
  const handleSubmit = vi.fn()

  const { getByTestId } = render(
    <Form data-testid="form" onSubmit={handleSubmit}>
      <input data-testid="btn-submit" type="submit" />
    </Form>
  )

  expect(getByTestId('form')).toBeInTheDocument()

  const btnSubmit = getByTestId('btn-submit')
  await userEvent.click(btnSubmit)

  expect(handleSubmit).toHaveBeenCalledTimes(0)
})
