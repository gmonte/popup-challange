import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import styled from 'styled-components'

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`

export const Root = styled(CheckboxPrimitive.Root)`
  width: 22px;
  height: 22px;
  padding: 0;
  border-radius: 4px;
  background-color: #f2f3e6;
  border: none;
  margin-left: 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ItemLabel = styled.label`
  color: #f2f3e6;
  flex: 1;
  padding: 12px;
  cursor: pointer;
`
