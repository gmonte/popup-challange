import { useMemo } from 'react'

import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import { Circle } from 'phosphor-react'
import uuid from 'short-uuid'

import { TextInput } from '../TextInput'
import {
  Item,
  ItemContainer,
  ItemLabel
} from './styles'

export interface RadioGroupItemProps {
  id?: string
  value: string
  label: string
}

export function RadioGroupItem ({ id: propId, value, label }: RadioGroupItemProps) {
  const id = useMemo(
    () => propId || uuid().generate(),
    [propId]
  )

  return (
    <TextInput.Root style={ { padding: 0 } }>
      <ItemContainer>
        <Item value={ value } id={ id }>
          <RadioGroupPrimitive.Indicator asChild>
            <Circle data-testid={`${id}-checked-icon`} weight="fill" size={ 22 } color="rgba(65, 53, 180, 1)" />
          </RadioGroupPrimitive.Indicator>
        </Item>
        <ItemLabel htmlFor={ id }>
          {label}
        </ItemLabel>
      </ItemContainer>
    </TextInput.Root>
  )
}

RadioGroupItem.displayName = 'RadioGroup.Item'
