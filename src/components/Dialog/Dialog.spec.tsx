import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Dialog } from '.'

it('should render subcomponents', async () => {
  const { getByText } = render(
    <Dialog.Root open close={() => {}}>
      <Dialog.Header>
        Header
      </Dialog.Header>
      <Dialog.Content>
        Content
      </Dialog.Content>
      <Dialog.Footer>
        Footer
      </Dialog.Footer>
    </Dialog.Root>
  )

  expect(getByText('Header')).toBeInTheDocument()
  expect(getByText('Content')).toBeInTheDocument()
  expect(getByText('Footer')).toBeInTheDocument()
})

it('should be closable by x', async () => {
  const handleClick = vi.fn()

  const { getByTestId } = render(
    <Dialog.Root open close={handleClick}>
      <Dialog.Header>
        Header
      </Dialog.Header>
    </Dialog.Root>
  )

  const x = getByTestId('dialog-x')
  expect(x).toBeInTheDocument()

  await userEvent.click(x)

  expect(handleClick).toHaveBeenCalledTimes(1)
})

it('should be closable by overlay click', async () => {
  const handleClick = vi.fn()

  const { getByTestId } = render(
    <Dialog.Root open close={handleClick}>
      <Dialog.Header>
        Header
      </Dialog.Header>
    </Dialog.Root>
  )

  const overlay = getByTestId('dialog-overlay')
  expect(overlay).toBeInTheDocument()

  await userEvent.click(overlay)

  expect(handleClick).toHaveBeenCalledTimes(1)
})

it('should not be closable', async () => {
  const handleClick = vi.fn()

  const { queryByTestId, getByTestId } = render(
    <Dialog.Root open close={handleClick} escape={false}>
      <Dialog.Header>
        Header
      </Dialog.Header>
    </Dialog.Root>
  )

  expect(queryByTestId('dialog-x')).not.toBeInTheDocument()
  
  const overlay = getByTestId('dialog-overlay')
  expect(overlay).toBeInTheDocument()

  await userEvent.click(overlay)

  expect(handleClick).toHaveBeenCalledTimes(0)
})

