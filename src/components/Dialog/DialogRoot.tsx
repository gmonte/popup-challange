import { Root } from '@radix-ui/react-dialog'
import { PropsWithChildren } from 'react'
import { ModalProps } from '~/hooks/useModal'

import {
  Overlay,
  Box,
  Transition
} from './styles'

export type DialogRootProps = PropsWithChildren<Omit<ModalProps, 'id'> & {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
}>

export function DialogRoot({
  open,
  children,
  close,
  size = 'md'
}: DialogRootProps) {
  return (
    <Root open onOpenChange={(openState) => !openState && close()}>
      <Transition $open={open}>
        <Overlay>
          <Box $size={size}>
            {children}
          </Box>
        </Overlay>
      </Transition>
    </Root>
  )
}

DialogRoot.displayName = 'Dialog.Root'
