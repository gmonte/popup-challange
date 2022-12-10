import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { RadioGroup } from '.'

it('should render label', async () => {
  const { getByText } = render(
    <RadioGroup.Root label="RadioGroup Label" />
  )

  expect(getByText('RadioGroup Label:')).toBeInTheDocument()
})

it('should render error', async () => {
  const { getByText } = render(
    <RadioGroup.Root error="RadioGroup error" />
  )

  expect(getByText('RadioGroup error')).toBeInTheDocument()
})

it('should select and unselect option', async () => {
  const { queryByTestId, getByText } = render(
    <RadioGroup.Root>
      <RadioGroup.Item
        id='option-1'
        value='option-1'
        label='Option 1'
      />
      <RadioGroup.Item
        id='option-2'
        value='option-2'
        label='Option 2'
      />
    </RadioGroup.Root>
  )

  expect(queryByTestId('option-1-checked-icon')).not.toBeInTheDocument()
  expect(queryByTestId('option-2-checked-icon')).not.toBeInTheDocument()
  
  await userEvent.click(getByText('Option 1'))
  expect(queryByTestId('option-1-checked-icon')).toBeInTheDocument()
  expect(queryByTestId('option-2-checked-icon')).not.toBeInTheDocument()
    
  await userEvent.click(getByText('Option 2'))
  expect(queryByTestId('option-1-checked-icon')).not.toBeInTheDocument()
  expect(queryByTestId('option-2-checked-icon')).toBeInTheDocument()
})
