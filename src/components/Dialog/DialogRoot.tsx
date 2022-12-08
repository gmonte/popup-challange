import { Root } from '@radix-ui/react-dialog'
import { PropsWithChildren } from 'react'
import { ModalProps } from '~/hooks/useModal'
import { TransitionFade } from '../Transition'

import {
  Overlay,
  Box
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
      <TransitionFade $open={open}>
        <Overlay>
          <Box $size={size}>
            {children}
          </Box>
        </Overlay>
      </TransitionFade>
    </Root>
  )
}

DialogRoot.displayName = 'Dialog.Root'
