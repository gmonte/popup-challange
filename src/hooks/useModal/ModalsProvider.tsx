import {
  ReactNode,
  useReducer,
  useMemo,
  useCallback,
  PropsWithChildren
} from 'react'

import { ModalsContext } from './modalsContext'
import {
  CREATE_MODAL,
  OPEN_MODAL,
  CLOSE_MODAL,
  REMOVE_MODAL,
  modalsReducer
} from './modalsReducer'
import {
  IUseModal,
  ICreateModal,
  IRemoveModal
} from './types'

export function ModalsProvider ({ children }: PropsWithChildren) {
  const [modals, dispatch] = useReducer(modalsReducer, [])

  const createModal = useCallback<ICreateModal>(
    (modal) => {
      dispatch({
        type: CREATE_MODAL,
        modal
      })
      setTimeout(() => {
        dispatch({
          type: OPEN_MODAL,
          modal
        })
      }, 50)
    },
    []
  )

  const removeModal = useCallback<IRemoveModal>(
    (modal) => {
      dispatch({
        type: CLOSE_MODAL,
        modal
      })
      setTimeout(() => {
        dispatch({
          type: REMOVE_MODAL,
          modal
        })
      }, 300)
    },
    []
  )

  const state = useMemo<IUseModal>(
    () => ({
      createModal,
      removeModal,
      modals
    }),
    [createModal, modals, removeModal]
  )

  const renderedModals = useMemo<ReactNode[]>(
    () =>
      modals.map(modal => {
        const {
          id,
          open,
          Component,
          props: modalProps = {}
        } = modal

        return (
          <Component
            key={ id }
            id={ id }
            close={ (): void => removeModal({ id }) }
            open={ open }
            { ...modalProps }
          />
        )
      }),
    [modals, removeModal]
  )

  return (
    <ModalsContext.Provider value={ state }>
      {children}

      {renderedModals}
    </ModalsContext.Provider>
  )
}
