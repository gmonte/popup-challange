import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Answers, State, Step } from './types'

const initialSteps: Step[] = [
  {
    id: 'identity',
    description: 'Identity',
    answers: {
      name: '',
      email: ''
    }
  },
  {
    id: 'details',
    description: 'Details',
    answers: {
      age: '',
      gender: ''
    }
  },
  {
    id: 'favorites',
    description: 'Favorites',
    answers: {
      book: '',
      color: ''
    }
  },
  {
    id: 'summary',
    description: 'Summary',
    answers: {
      agree: false
    }
  }
]

const initialState: State = {
  steps: initialSteps,
  currentStepId: initialSteps[0].id,
  finished: false
}

export const stepSlice = createSlice({
  name: 'steps',
  initialState,
  reducers: {
    next(state, action: PayloadAction<Answers>) {
      const currentStepIndex = state.steps.findIndex(step => step.id === state.currentStepId)
      
      state.steps[currentStepIndex].answers = action.payload

      const nextStep = state.steps[currentStepIndex + 1]

      if (nextStep) {
        state.currentStepId = nextStep.id
      } else {
        state.finished
      }
    },
    previous(state) {
      const currentStepIndex = state.steps.findIndex(step => step.id === state.currentStepId)

      const previousStep = state.steps[currentStepIndex - 1]

      if (previousStep) {
        state.currentStepId = previousStep.id
      }
    }
  }
})

export const stepsActions = stepSlice.actions
