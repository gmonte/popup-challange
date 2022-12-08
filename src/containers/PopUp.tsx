import { useCallback } from 'react'

import { Dialog } from '~/components/Dialog'
import { ModalProps } from '~/hooks/useModal'

export interface PopUpProps extends ModalProps {
  onConfirm?: () => void
}

export function PopUp ({
  open,
  close,
  onConfirm
}: PopUpProps) {
  const handleConfirm = useCallback(
    () => {
      if (onConfirm) {
        onConfirm()
      }
      close()
    },
    [close, onConfirm]
  )

  return (
    <Dialog.Root open={open} close={close}>
      <Dialog.Header>
        Dialog title here
      </Dialog.Header>

      <Dialog.Content>

        <p>
          Mollit enim in officia deserunt irure non.
        </p>
        
        <p>
          Elit excepteur culpa sit aute sit veniam do in. Ut ipsum consectetur ex voluptate ullamco eu. Elit consequat est ex reprehenderit mollit. Minim esse id amet ut laboris eiusmod culpa voluptate incididunt qui nulla sunt.
        </p>
        
        <p>
          Ullamco tempor labore est velit incididunt elit fugiat irure eiusmod. Ut tempor exercitation aliquip nostrud quis esse do velit nisi est labore adipisicing. Laboris proident laborum non proident eiusmod labore mollit irure enim eiusmod ea deserunt proident.
        </p>

      </Dialog.Content>

      <Dialog.Footer>
        <button onClick={ handleConfirm }>
          Ok
        </button>
      </Dialog.Footer>
    </Dialog.Root>
  )
}
