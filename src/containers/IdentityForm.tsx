import { forwardRef, useCallback, useImperativeHandle } from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { FormRef, FormProps, FormValuesByQuestions } from "~/@types/Form"
import { useAppSelector } from "~/store"
import { selectCurrentStep } from "~/store/steps/selectors"
import { IdentityQuestions } from "~/@types/Steps"

type FormValues = FormValuesByQuestions<IdentityQuestions>

const schema = yup.object().shape<Record<keyof FormValues, yup.AnySchema>>({
  name: yup.string(),
  email: yup.string()
    .email('It is not a valid e-mail')
    .required('This field is Required')
})

export const IdentityForm = forwardRef<FormRef, FormProps>(
  ({ onSubmit }, ref) => {
    const currentStep = useAppSelector(selectCurrentStep)
    const questions = currentStep?.questions as IdentityQuestions

    const {
      register,
      getValues,
      handleSubmit,
      formState: { errors }
    } = useForm<FormValues>({
      resolver: yupResolver(schema)
    })

    const submit = useCallback(
      () => handleSubmit(onSubmit)(),
      [handleSubmit]
    )

    useImperativeHandle(ref, () => ({
      submit,
      getValues
    }))

    if (!questions) {
      return null
    }

    return (
      <form onSubmit={ (e) => e.preventDefault() }>
        <input
          defaultValue={questions.name.answer}
          placeholder={questions.name.description}
          { ...register("name") }
        />

        <input
          defaultValue={questions.email.answer}
          placeholder={questions.email.description}
          {...register("email", { required: true }) }
        />
        {errors.email?.message}
      </form>
    )
  }
)
