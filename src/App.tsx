import {
  useCallback,
  useEffect
} from 'react'

import { PopUp } from './containers/PopUp'
import { useModal } from './hooks/useModal'
import { useAppSelector } from './store'
import { selectSubmitted } from './store/steps/selectors'

export function App () {
  const { createModal } = useModal()

  const submitted = useAppSelector(selectSubmitted)

  const handleOpenModal = useCallback(
    () => {
      createModal({
        id: 'popup',
        Component: PopUp
      })
    },
    [createModal]
  )

  useEffect(
    () => {
      if (!submitted) {
        const timeout = setTimeout(
          handleOpenModal,
          1000 * 2 // 2 seconds
        )
        return () => clearTimeout(timeout)
      }
    },
    [handleOpenModal, submitted]
  )

  return null
}
