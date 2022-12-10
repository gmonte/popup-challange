import {
  useCallback,
  useMemo
} from 'react'

import { Checkbox } from '../Checkbox'
import { useCheckboxGroupContext } from './CheckboxGroupRoot'

export interface CheckboxGroupItemProps {
  id?: string,
  label: string
  value: string
}

export function CheckboxGroupItem ({
  id,
  label,
  value
}: CheckboxGroupItemProps) {
  const { groupValue, onOptionChange } = useCheckboxGroupContext()

  const checked = useMemo(
    () => groupValue?.includes?.(value),
    [value, groupValue]
  )

  const handleCheckedChange = useCallback(
    (newChecked: boolean) => onOptionChange(value, newChecked),
    [value, onOptionChange]
  )

  return (
    <Checkbox
      id={id}
      label={ label }
      checked={ checked }
      onCheckedChange={ handleCheckedChange }
    />
  )
}

CheckboxGroupItem.displayName = 'CheckboxGroup.Item'
