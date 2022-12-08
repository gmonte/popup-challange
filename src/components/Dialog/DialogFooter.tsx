import { Close } from '@radix-ui/react-dialog'

import { PropsWithChildren } from 'react'
import { CSSProperties } from 'styled-components'

import { Footer } from './styles'

export type DialogFooterProps = PropsWithChildren<{
  style?: CSSProperties
}>

export function DialogFooter({
  children,
  style
}: DialogFooterProps) {
  return (
    <Footer style={style}>
      {children}
    </Footer>
  )
}

DialogFooter.displayName = 'Dialog.Footer'
