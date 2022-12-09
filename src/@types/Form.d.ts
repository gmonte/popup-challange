import { FieldValues } from "react-hook-form"
import { IdentityQuestions, Questions, Question } from "./Steps"

export type FormRef = {
  getValues: () => FieldValues
  submit: () => Promise<void>
}

export type FormProps = {
  onSubmit: (values: Answers) => void
}

export type FormValuesByQuestions<T = Questions> = {
  [key in keyof T]: T[key]['answer']
}
