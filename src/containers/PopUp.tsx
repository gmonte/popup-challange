import { useCallback, useEffect, useMemo, useRef } from 'react'
import { FieldValues } from 'react-hook-form'
import { FormRef } from '~/@types/Form'

import { Dialog } from '~/components/Dialog'
import { ModalProps } from '~/hooks/useModal'
import { useAppDispatch, useAppSelector } from '~/store'
import { stepsActions } from '~/store/steps'
import { selectCurrentStep, selectSubmitted, selectHasNextStep, selectHasPreviousStep, selectIsLastStep } from '~/store/steps/selectors'
import { DetailsForm } from './DetailsForm'
import { FavoritesForm } from './FavoritesForm'
import { IdentityForm } from './IdentityForm'
import { SummaryTable } from './SummaryTable'

export function PopUp ({ open, close }: ModalProps) {
  const dispatch = useAppDispatch()

  const currentFormRef = useRef<FormRef>(null)

  const currentStep = useAppSelector(selectCurrentStep)
  const hasNextStep = useAppSelector(selectHasNextStep)
  const hasPreviousStep = useAppSelector(selectHasPreviousStep)
  const isLastStep = useAppSelector(selectIsLastStep)
  const submitted = useAppSelector(selectSubmitted)

  const handleNext = useCallback(
    (answers: FieldValues) => {
      dispatch(stepsActions.next(answers))
    },
    [dispatch]
  )

  const handlePrevious = useCallback(
    () => {
      const answers = currentFormRef.current?.getValues?.()
      dispatch(stepsActions.previous(answers))
    },
    [dispatch]
  )

  const handleSubmitCurrentForm = useCallback(
    () => currentFormRef.current?.submit(),
    []
  )
  
  const handleSubmit = useCallback(
    () => {
      dispatch(stepsActions.submit())
    },
    []
  )

  const Content = useMemo(
    () => {
      switch (currentStep?.id) {
        case 'identity': return () => (
          <IdentityForm
            ref={currentFormRef}
            onSubmit={handleNext}
          />
        )
        case 'details': return () => (
          <DetailsForm
            ref={currentFormRef}
            onSubmit={handleNext}
          />
        )
        case 'favorites': return () => (
          <FavoritesForm
            ref={currentFormRef}
            onSubmit={handleNext}
          />
        )
        default: return SummaryTable
      }
    },
    [currentStep]
  )

  useEffect(
    () => {
      if (submitted) {
        close()
      }
    },
    [submitted, close]
  )

  return (
    <Dialog.Root open={open} close={close}>
      <Dialog.Header>
        {currentStep?.description}
      </Dialog.Header>

      <Dialog.Content>
        <Content />
      </Dialog.Content>

      <Dialog.Footer>
        {hasPreviousStep && (
          <button type="button" onClick={handlePrevious}>
            Previous
          </button>
        )}
        {hasNextStep && (
          <button type="button" onClick={handleSubmitCurrentForm}>
            Next
          </button>
        )}
        {isLastStep && (
          <button type="button" onClick={handleSubmit}>
            Submit
          </button>
        )}
      </Dialog.Footer>
    </Dialog.Root>
  )
}
