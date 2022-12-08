export interface IdentityAnswers {
  name: string
  email: string
}

export interface DetailsAnswers {
  age: string
  gender: string
}

export interface FavoritesAnswers {
  book: string
  color: string
}

export interface SummaryAnswers {
  agree: boolean
}

export interface Answers {
  [key: string]: string | boolean
}

export interface Step {
  id: string
  description: string,
  answers: Answers
}

export interface State {
  currentStepId: string,
  steps: Step[],
  finished: boolean
}
