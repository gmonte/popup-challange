import { useCallback, useState } from 'react'

import { Dialog } from '~/components/Dialog'
import { ModalProps } from '~/hooks/useModal'
import { useAppDispatch, useAppSelector } from '~/store'
import { stepsActions } from '~/store/steps'
import { selectCurrentStep, selectHasNextStep, selectHasPreviousStep, selectIsLastStep } from '~/store/steps/selectors'

export interface PopUpProps extends ModalProps {
  onConfirm?: () => void
}

export function PopUp ({
  open,
  close,
  onConfirm
}: PopUpProps) {
  const dispatch = useAppDispatch()

  const currentStep = useAppSelector(selectCurrentStep)
  const hasNextStep = useAppSelector(selectHasNextStep)
  const hasPreviousStep = useAppSelector(selectHasPreviousStep)
  const isLastStep = useAppSelector(selectIsLastStep)

  const handleNext = useCallback(
    () => {
      dispatch(stepsActions.next({
        answer: 'response'
      }))
    },
    [dispatch]
  )

  const handlePrevious = useCallback(
    () => {
      dispatch(stepsActions.previous())
    },
    [dispatch]
  )

  const handleSubmit = useCallback(
    () => {
      close()
    },
    [close]
  )

  return (
    <Dialog.Root open={open} close={close}>
      <Dialog.Header>
        Dialog title here
      </Dialog.Header>

      <Dialog.Content>
        Current Step: {currentStep?.id}
      </Dialog.Content>

      <Dialog.Footer>
        {hasPreviousStep && (
          <button onClick={handlePrevious}>
            Previous
          </button>
        )}
        {hasNextStep && (
          <button onClick={handleNext}>
            Next
          </button>
        )}
        {isLastStep && (
          <button onClick={handleSubmit}>
            Submit
          </button>
        )}
      </Dialog.Footer>
    </Dialog.Root>
  )
}
