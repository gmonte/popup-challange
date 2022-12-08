import { PropsWithChildren } from 'react'
import { CSSProperties } from 'styled-components'

import { Content } from './styles'

export type DialogContentProps = PropsWithChildren<{
  style?: CSSProperties
}>

export function DialogContent({
  children,
  style
}: DialogContentProps) {
  return (
    <Content style={style}>
      {children}
    </Content>
  )
}
DialogContent.displayName = 'Dialog.Content'
