import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FieldValues } from 'react-hook-form'

import { AllQuestions, ReducerState, Step } from '~/@types/Steps'

const initialSteps: Step[] = [
  {
    id: 'identity',
    description: 'Identity',
    questions: {
      name: {
        description: 'Name',
        answer: ''
      },
      email: {
        description: 'E-mail',
        answer: ''
      }
    }
  },
  {
    id: 'details',
    description: 'Details',
    questions: {
      age: {
        description: 'Age',
        answer: undefined
      },
      gender: {
        description: 'Gender',
        answer: ''
      }
    }
  },
  {
    id: 'favorites',
    description: 'Favorites',
    questions: {
      favoriteBook: {
        description: 'Favorite Book',
        answer: ''
      },
      favoriteColor: {
        description: 'Favorite Color',
        answer: ''
      }
    }
  },
  {
    id: 'summary',
    description: 'Summary'
  }
]

const initialState: ReducerState = {
  steps: initialSteps,
  currentStepId: initialSteps[0].id,
  submitted: false
}

function updateQuestionsByStepIndex(
  state: ReducerState,
  stepIndex: number,
  fieldValues?: FieldValues
) {
  const questions = state.steps[stepIndex].questions as AllQuestions

  if (questions && fieldValues) {
    Object.entries(questions).forEach((item) => {
      const questionId = item[0] as keyof AllQuestions
      questions[questionId].answer = fieldValues[questionId]
    })
    state.steps[stepIndex].questions = questions
  }

  return state
}

export const stepSlice = createSlice({
  name: 'steps',
  initialState,
  reducers: {
    next(state, { payload }: PayloadAction<FieldValues>) {
      const currentStepIndex = state.steps.findIndex(step => step.id === state.currentStepId)

      state = updateQuestionsByStepIndex(state, currentStepIndex, payload)

      const nextStep = state.steps[currentStepIndex + 1]

      if (nextStep) {
        state.currentStepId = nextStep.id
      }
    },
    previous(state, { payload }: PayloadAction<FieldValues | undefined>) {
      const currentStepIndex = state.steps.findIndex(step => step.id === state.currentStepId)

      state = updateQuestionsByStepIndex(state, currentStepIndex, payload)

      const previousStep = state.steps[currentStepIndex - 1]

      if (previousStep) {
        state.currentStepId = previousStep.id
      }
    },
    submit(state) {
      state.submitted = true
    }
  }
})

export const stepsActions = stepSlice.actions
