import * as SelectPrimitive from '@radix-ui/react-select'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const Trigger = styled(SelectPrimitive.Trigger)`
  border: none;
  padding: 0;
  margin: 0;
  background: transparent;
  cursor: pointer;
  flex: 1;
`

export const Value = styled.span<{ $hasValue: boolean }>`
  color: ${ ({ $hasValue }) => $hasValue ? '#f2f3e6' : '#babaca' };
`

export const SelectedValueContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`

export const SelectedValue = styled(SelectPrimitive.Value)`
  text-align: left;
`

export const Content = styled(SelectPrimitive.Content)`
  border-radius: 6px;
  overflow: hidden;
  z-index: 50;
  margin-top: 50px;
  margin-left: -2px;
  box-shadow: 0 0 5px #333;
`

export const ScrollUpButton = styled(SelectPrimitive.ScrollUpButton)`
  background-color: #12172d;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
`

export const ScrollDownButton = styled(SelectPrimitive.ScrollDownButton)`
  background-color: #12172d;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
`

export const OptionContainer = styled(SelectPrimitive.Item)`
  display: flex;
  padding: 10px;
  cursor: pointer;
  color: #f2f3e6;

  background-color: rgba(67, 55, 124, 0.98);

  transition: background-color 0.1s linear;

  &:hover {
    outline: none;
    background-color: #12172d;
  }
`

export const OptionTextContainer = styled.div`
  flex: 1;
  font-size: 0.9rem;
`

export const OptionText = styled(SelectPrimitive.ItemText)`
  
`