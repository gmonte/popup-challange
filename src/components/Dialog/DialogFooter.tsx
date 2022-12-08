import { Close } from '@radix-ui/react-dialog'

import { PropsWithChildren } from 'react'

import { Footer } from './styles'

export type DialogFooterProps = PropsWithChildren

export function DialogFooter({ children }: DialogFooterProps) {
  return (
    <Footer>
      {children}
    </Footer>
  )
}
DialogFooter.displayName = 'Dialog.Footer'
