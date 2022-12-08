import { Close } from '@radix-ui/react-dialog'

import { X } from 'phosphor-react'
import { CSSProperties, PropsWithChildren } from 'react'
import { useDialogRoot } from './DialogRoot'

import { Header, HeaderContent } from './styles'

export type DialogHeaderProps = PropsWithChildren<{
  hideClose?: boolean,
  style?: CSSProperties
}>

export function DialogHeader({
  children,
  hideClose = false,
  style
}: DialogHeaderProps) {
  const { escape } = useDialogRoot()

  return (
    <Header style={style}>
      <HeaderContent>
        {children}
      </HeaderContent>
      {(escape && !hideClose) && (
        <Close asChild style={{cursor: 'pointer'}}>
          <X color={ style?.color || '#ffffff'} />
        </Close>
      )}
    </Header>
  )
}

DialogHeader.displayName = 'Dialog.Header'
