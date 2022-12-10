import { render } from '@testing-library/react'

import { TextInput } from '.'

it('should render subcomponents', async () => {
  const { getByText, getByTestId } = render(
    <TextInput.Root>
      <TextInput.Icon>
        <span>icon</span>
      </TextInput.Icon>
      <TextInput.Input data-testid="input" />
    </TextInput.Root>
  )

  expect(getByText('icon')).toBeInTheDocument()
  expect(getByTestId('input')).toBeInTheDocument()
})
