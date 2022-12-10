import {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useMemo
} from 'react'
import {
  Controller,
  useForm
} from 'react-hook-form'

import { yupResolver } from '@hookform/resolvers/yup'
import { BookBookmark } from 'phosphor-react'
import * as yup from 'yup'

import {
  FormRef,
  FormProps,
  FormValuesByQuestions
} from '~/@types/Form'
import { FavoritesQuestions } from '~/@types/Steps'
import { CheckboxGroup } from '~/components/CheckboxGroup'
import { Form } from '~/components/Form'
import { TextInput } from '~/components/TextInput'
import { useAppSelector } from '~/store'
import { selectCurrentStep } from '~/store/steps/selectors'

type FormValues = FormValuesByQuestions<FavoritesQuestions>

const schema = yup.object().shape<Record<keyof FormValues, yup.AnySchema>>({
  favoriteBook: yup.string().required('This field is Required'),
  favoriteColors: yup.array().test(
    'array required',
    'This field is Required',
    (value) => !!value?.length
  )
})

export const FavoritesForm = forwardRef<FormRef, FormProps>(
  ({ onSubmit }, ref) => {
    const currentStep = useAppSelector(selectCurrentStep)
    const questions = currentStep?.questions as FavoritesQuestions

    const {
      control,
      register,
      getValues,
      handleSubmit,
      formState: { errors }
    } = useForm<FormValues>({
      resolver: yupResolver(schema),
      defaultValues: { favoriteColors: questions.favoriteColors.answer }
    })

    const favoriteColorsOptions = useMemo(
      () => questions.favoriteColors.options?.map?.((option) => (
        <CheckboxGroup.Item
          key={ option.value }
          value={ option.value }
          label={ option.label }
        />
      )),
      [questions.favoriteColors.options]
    )

    const submit = useCallback(
      async () => await handleSubmit(onSubmit)(),
      [handleSubmit, onSubmit]
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
        <TextInput.Root
          label={ questions.favoriteBook.description }
          error={ errors.favoriteBook?.message }
        >
          <TextInput.Icon>
            <BookBookmark />
          </TextInput.Icon>
          <TextInput.Input
            defaultValue={ questions.favoriteBook.answer as string }
            placeholder={ questions.favoriteBook.description }
            { ...register('favoriteBook', { required: true }) }
          />
        </TextInput.Root>

        <Controller
          name="favoriteColors"
          control={ control }
          render={ ({
            field: {
              onChange,
              ...field
            }
          }) => {
            return (
              <CheckboxGroup.Root
                label={ questions.favoriteColors.description }
                error={ errors.favoriteColors?.message }
                onValueChange={ onChange }
                { ...field }
              >
                {favoriteColorsOptions}
              </CheckboxGroup.Root>
            )
          } }
        />
      </Form>
    )
  }
)

FavoritesForm.displayName = 'FavoritesForm'
