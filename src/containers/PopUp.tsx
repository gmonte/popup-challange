import {
  useCallback,
  useEffect,
  useMemo,
  useRef
} from 'react'
import { FieldValues } from 'react-hook-form'

import { FormRef } from '~/@types/Form'
import { Button } from '~/components/Button'
import { Dialog } from '~/components/Dialog'
import { ModalProps } from '~/hooks/useModal'
import {
  useAppDispatch,
  useAppSelector
} from '~/store'
import { stepsActions } from '~/store/steps'
import {
  selectCurrentStep,
  selectSubmitted,
  selectHasNextStep,
  selectHasPreviousStep,
  selectIsLastStep
} from '~/store/steps/selectors'

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
    [dispatch]
  )

  const Content = useMemo(
    () => {
      switch (currentStep?.id) {
        // eslint-disable-next-line react/display-name
        case 'identity': return function () {
          return <IdentityForm
            ref={ currentFormRef }
            onSubmit={ handleNext }
          />
        }
        // eslint-disable-next-line react/display-name
        case 'details': return function () {
          return <DetailsForm
            ref={ currentFormRef }
            onSubmit={ handleNext }
          />
        }
        // eslint-disable-next-line react/display-name
        case 'favorites': return function () {
          return <FavoritesForm
            ref={ currentFormRef }
            onSubmit={ handleNext }
          />
        }
        default: return SummaryTable
      }
    },
    [currentStep?.id, handleNext]
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
    <Dialog.Root
      open={ open }
      close={ close }
      escape={ false }
    >
      <Dialog.Header>
        {currentStep?.description}
      </Dialog.Header>

      <Dialog.Content>
        <Content />
      </Dialog.Content>

      <Dialog.Footer
        style={ {
          flexDirection: 'row-reverse',
          justifyContent: 'space-between'
        } }
      >
        {hasNextStep && (
          <Button variant="primary" onClick={ handleSubmitCurrentForm }>
            Next
          </Button>
        )}
        {isLastStep && (
          <Button variant="primary" onClick={ handleSubmit }>
            Submit
          </Button>
        )}
        {hasPreviousStep && (
          <Button onClick={ handlePrevious }>
            Previous
          </Button>
        )}
      </Dialog.Footer>
    </Dialog.Root>
  )
}
