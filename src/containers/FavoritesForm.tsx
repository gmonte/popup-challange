import { forwardRef, useCallback, useImperativeHandle } from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { FormRef, FormProps, FormValuesByQuestions } from "~/@types/Form"
import { useAppSelector } from "~/store"
import { selectCurrentStep } from "~/store/steps/selectors"
import { FavoritesQuestions } from "~/@types/Steps"
import { Form } from "~/components/Form"
import { TextInput } from "~/components/TextInput"

type FormValues = FormValuesByQuestions<FavoritesQuestions>

const schema = yup.object().shape<Record<keyof FormValues, yup.AnySchema>>({
  favoriteBook: yup.string().required('This field is Required'),
  favoriteColor: yup.string().required('This field is Required')
})

export const FavoritesForm = forwardRef<FormRef, FormProps>(
  ({ onSubmit }, ref) => {
    const currentStep = useAppSelector(selectCurrentStep)
    const questions = currentStep?.questions as FavoritesQuestions

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
        <TextInput.Root error={errors.favoriteBook?.message}>
          <TextInput.Input
            defaultValue={questions.favoriteBook.answer}
            placeholder={questions.favoriteBook.description}
            {...register("favoriteBook", { required: true })}
          />
        </TextInput.Root>

        <TextInput.Root error={errors.favoriteColor?.message}>
          <TextInput.Input
            defaultValue={questions.favoriteColor.answer}
            placeholder={questions.favoriteColor.description}
            {...register("favoriteColor", { required: true })}
          />
        </TextInput.Root>
      </Form>
    )
  }
)
