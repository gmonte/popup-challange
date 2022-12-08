import * as DialogPrimitive from '@radix-ui/react-dialog'
import styled from 'styled-components'

export const Overlay = styled(DialogPrimitive.Overlay)`
  position: fixed;
  inset: 0;
  z-index: 20;
  background-color: #5e6175AA;
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
  overflow: hidden;
  padding: 1rem;
  padding: 0;
  margin: 12px;
  box-shadow: 0 0 10px #565656;

  &:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
  }
`

export const Header = styled.div`
  padding: 12px 12px 12px 18px;
  display: flex;
  color: ${({ style }) => style?.color || '#fff'};
  background: linear-gradient(90deg, rgba(22, 7, 33, 0.9) 0%, rgba(48, 39, 55, 0.56) 100%);
  backdrop-filter: blur(5px);
`

export const HeaderContent = styled.div`
  flex: 1;
  font-weight: bold;
`

export const Content = styled.div`
  flex: 1;
  max-height: 85vh;
  overflow-y: auto;
  padding: 18px;
  background-color: rgba(32, 25, 49, 0.7);
  backdrop-filter: blur(5px);
`

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 18px 18px;
  background-color: rgba(32, 25, 49, 0.7);
  backdrop-filter: blur(5px);
`