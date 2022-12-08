import { useCallback, useEffect } from "react"
import { PopUp } from "./containers/PopUp"
import { GlobalStyle } from "./globalStyles"
import { useModal } from "./hooks/useModal"
import { useAppSelector } from "./store"
import { selectSubmitted } from "./store/steps/selectors"

type AppProps = {
  rootDivId: string
}

function App({ rootDivId }: AppProps) {
  const { createModal } = useModal()

  const submitted = useAppSelector(selectSubmitted)

  const handleOpenModal = useCallback(
    () => {
      createModal({
        id: 'popup',
        Component: PopUp,
        props: {
          onConfirm: () => console.log('ok pressed')
        }
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

  return (
    <>
      <GlobalStyle rootDivId={ rootDivId } />
      <button onClick={handleOpenModal}>
        open modal
      </button>
    </>
  )
}

export default App
