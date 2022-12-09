import { forwardRef, useCallback, useImperativeHandle } from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { FormRef, FormProps, FormValuesByQuestions } from "~/@types/Form"
import { useAppSelector } from "~/store"
import { selectCurrentStep } from "~/store/steps/selectors"
import { IdentityQuestions } from "~/@types/Steps"
import { TextInput } from "~/components/TextInput"
import { EnvelopeSimple, User } from "phosphor-react"
import { Form } from "~/components/Form"

type FormValues = FormValuesByQuestions<IdentityQuestions>

const schema = yup.object().shape<Record<keyof FormValues, yup.AnySchema>>({
  name: yup.string(),
  email: yup.string().email('It is not a valid e-mail')
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
      <Form>
        <TextInput.Root label={questions.name.description}>
          <TextInput.Icon>
            <User />
          </TextInput.Icon>
          <TextInput.Input
            defaultValue={questions.name.answer}
            placeholder={questions.name.description}
            {...register("name")}
          />
        </TextInput.Root>

        <TextInput.Root
          label={questions.email.description}
          error={errors.email?.message}
        >
          <TextInput.Icon>
            <EnvelopeSimple />
          </TextInput.Icon>
          <TextInput.Input
            defaultValue={questions.email.answer}
            placeholder={questions.email.description}
            {...register("email")}
          />
        </TextInput.Root>
      </Form>
    )
  }
)
