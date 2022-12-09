export interface Question<T = string, P = T> {
  description: string
  answer?: T
  options?: { label: string, value: P }[]
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
  favoriteColors: Question<string[], string>
}

export type AllQuestions = IdentityQuestions & DetailsQuestions & FavoritesQuestions

export type StepId = 'identity' | 'details' | 'favorites' | 'summary'

export interface Step {
  id: StepId
  description: string
  questions?: IdentityQuestions | DetailsQuestions | FavoritesQuestions
}

export interface ReducerState {
  currentStepId: StepId
  steps: Step[]
  submitted: boolean
}
