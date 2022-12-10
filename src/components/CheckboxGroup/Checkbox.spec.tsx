import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { CheckboxGroup } from '.'

it('should render label', async () => {
  const { getByText } = render(
    <CheckboxGroup.Root label="CheckboxGroup Label" />
  )

  expect(getByText('CheckboxGroup Label:')).toBeInTheDocument()
})

it('should render error', async () => {
  const { getByText } = render(
    <CheckboxGroup.Root error="CheckboxGroup error" />
  )

  expect(getByText('CheckboxGroup error')).toBeInTheDocument()
})

it('should select and unselect options', async () => {
  const { queryByTestId, getByText } = render(
    <CheckboxGroup.Root>
      <CheckboxGroup.Item
        id='option-1'
        value='option-1'
        label='Option 1'
      />
      <CheckboxGroup.Item
        id='option-2'
        value='option-2'
        label='Option 2'
      />
    </CheckboxGroup.Root>
  )

  expect(queryByTestId('option-1-checked-icon')).not.toBeInTheDocument()
  expect(queryByTestId('option-2-checked-icon')).not.toBeInTheDocument()
  
  await userEvent.click(getByText('Option 1'))
  expect(queryByTestId('option-1-checked-icon')).toBeInTheDocument()
  expect(queryByTestId('option-2-checked-icon')).not.toBeInTheDocument()
    
  await userEvent.click(getByText('Option 2'))
  expect(queryByTestId('option-1-checked-icon')).toBeInTheDocument()
  expect(queryByTestId('option-2-checked-icon')).toBeInTheDocument()
    
  await userEvent.click(getByText('Option 1'))
  expect(queryByTestId('option-1-checked-icon')).not.toBeInTheDocument()
  expect(queryByTestId('option-2-checked-icon')).toBeInTheDocument()
    
  await userEvent.click(getByText('Option 2'))
  expect(queryByTestId('option-1-checked-icon')).not.toBeInTheDocument()
  expect(queryByTestId('option-2-checked-icon')).not.toBeInTheDocument()
})
