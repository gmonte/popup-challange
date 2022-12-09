import { useCallback, useEffect, useLayoutEffect } from "react"
import { PopUp } from "./containers/PopUp"
import { useModal } from "./hooks/useModal"
import { useAppDispatch, useAppSelector } from "./store"
import { appsActions } from "./store/app"
import { selectSubmitted } from "./store/steps/selectors"

export type AppProps = {
  rootDivId: string
  portalDivId: string
}

export function App({ rootDivId, portalDivId }: AppProps) {
  const dispatch = useAppDispatch()

  const { createModal } = useModal()

  const submitted = useAppSelector(selectSubmitted)

  const handleOpenModal = useCallback(
    () => {
      createModal({
        id: 'popup',
        Component: PopUp
      })
    },
    []
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

  useLayoutEffect(
    () => {
      dispatch(appsActions.setRootDivId(rootDivId))
    },
    [rootDivId]
  )

  useLayoutEffect(
    () => {
      dispatch(appsActions.setPortalDivId(portalDivId))
    },
    [portalDivId]
  )

  return null
}
