export interface Question {
  description: string
  answer: string
}

export type IdentityQuestions = {
  name: Question
  email: Question
}

export type DetailsQuestions = {
  age: Question
  gender: Question
}

export type FavoritesQuestions = {
  favoriteBook: Question
  favoriteColor: Question
}

export type AllQuestions = IdentityQuestions & DetailsQuestions & FavoritesQuestions

export type StepId = 'identity' | 'details' | 'favorites' | 'summary'

export interface Step {
  id: StepId
  description: string
  questions?: IdentityQuestions | DetailsQuestions | FavoritesQuestions
}

export interface ReducerState {
  currentStepId: string
  steps: Step[]
  submitted: boolean
}
