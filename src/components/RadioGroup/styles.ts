import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`

export const GroupRoot = styled(RadioGroupPrimitive.Root)`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`

export const Item = styled(RadioGroupPrimitive.Item)`
  width: 22px;
  height: 22px;
  padding: 0;
  border-radius: 50%;
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
