import { useCallback, useEffect } from "react"
import { PopUp } from "./containers/PopUp"
import { GlobalStyle } from "./globalStyles"
import { useModal } from "./hooks/useModal"

type AppProps = {
  rootDivId: string
}

function App({ rootDivId }: AppProps) {
  const { createModal } = useModal()

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
      const timeout = setTimeout(
        handleOpenModal,
        1000 * 2 // 2 seconds
      )
      return () => clearTimeout(timeout)
    },
    [handleOpenModal]
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
