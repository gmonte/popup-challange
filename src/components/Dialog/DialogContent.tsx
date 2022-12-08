import { PropsWithChildren } from 'react'

import { Content } from './styles'

export type DialogContentProps = PropsWithChildren

export function DialogContent({ children }: DialogContentProps) {
  return (
    <Content>
      {children}
    </Content>
  )
}
DialogContent.displayName = 'Dialog.Content'
