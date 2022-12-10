import {
  createContext,
  CSSProperties,
  PropsWithChildren,
  useContext
} from 'react'

import { Root } from '@radix-ui/react-dialog'

import { ModalProps } from '~/hooks/useModal'

import { TransitionFade } from '../TransitionFade'
import {
  Overlay,
  Box
} from './styles'

interface DialogRootContextProps {
  escape?: boolean
}

const DialogRootContext = createContext<DialogRootContextProps>({} as DialogRootContextProps)

export const useDialogRoot = () => useContext(DialogRootContext)

export type DialogRootProps = PropsWithChildren<Omit<ModalProps, 'id'> & DialogRootContextProps & {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  style?: CSSProperties
}>

export function DialogRoot ({
  open,
  children,
  close,
  size = 'md',
  style,
  escape = true
}: DialogRootProps) {
  return (
    <Root open onOpenChange={ (openState) => escape && !openState && close() }>
      <TransitionFade open={ open }>
        <Overlay>
          <Box style={ style } $size={ size }>
            <DialogRootContext.Provider value={ { escape } }>
              {children}
            </DialogRootContext.Provider>
          </Box>
        </Overlay>
      </TransitionFade>
    </Root>
  )
}

DialogRoot.displayName = 'Dialog.Root'
