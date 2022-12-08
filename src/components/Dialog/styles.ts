import * as DialogPrimitive from '@radix-ui/react-dialog'
import styled from 'styled-components'

export const Transition = styled.div<{ $open: boolean }>`
  display: inline-block;
  opacity: ${({ $open }) => $open ? 1 : 0};
  visibility: ${({ $open }) => $open ? 'visible' : 'hidden'};
  animation: ${({ $open }) => $open ? 'fadeIn' : 'fadeOut'} 0.1s linear;
  transition: visibility 0.1s linear, opacity 0.1s linear;
`

export const Overlay = styled(DialogPrimitive.Overlay)`
  position: fixed;
  inset: 0;
  z-index: 20;
  background-color: rgb(0 0 0 / 0.75);
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Box = styled(DialogPrimitive.Content)<{ $size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' }>`
  position: fixed;
  z-index: 50;
  max-width: ${({ $size }) => {
    if ($size === 'xs') return '15rem'
    if ($size === 'sm') return '30rem'
    if ($size === 'md') return '45rem'
    if ($size === 'lg') return '60rem'
    return '75rem' // xl
  }};
  border-radius: 0.5rem;
  padding: 1rem;
  background-color: #ffffff;
  padding: 0;
  margin: 10px;
  box-shadow: 0 0 20px #252525;

  &:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
  }
`

export const Content = styled.div`
  flex: 1;
  max-height: 85vh;
  overflow-y: auto;
  padding: 0 10px;
`

export const Header = styled.div`
  padding: 10px;
  border-bottom: 1px solid #e6e6e6;
  display: flex;
`

export const HeaderContent = styled.div`
  flex: 1;
`

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 10px;
`