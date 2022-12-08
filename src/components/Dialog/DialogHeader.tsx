import { Close } from '@radix-ui/react-dialog'

import { X } from 'phosphor-react'
import { PropsWithChildren } from 'react'

import { Header, HeaderContent } from './styles'

export type DialogHeaderProps = PropsWithChildren<{
  hideClose?: boolean
}>

export function DialogHeader({
  children,
  hideClose =false
}: DialogHeaderProps) {
  return (
    <Header>
      <HeaderContent>
        {children}
      </HeaderContent>
      {!hideClose && (
        <Close asChild style={{cursor: 'pointer'}}>
          <X />
        </Close>
      )}
    </Header>
  )
}
DialogHeader.displayName = 'Dialog.Header'
