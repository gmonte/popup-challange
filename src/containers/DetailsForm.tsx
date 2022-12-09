import { forwardRef, useCallback, useImperativeHandle, useMemo } from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { FormRef, FormProps, FormValuesByQuestions } from "~/@types/Form";
import { useAppSelector } from "~/store";
import { selectCurrentStep } from "~/store/steps/selectors";
import { DetailsQuestions } from "~/@types/Steps";
import { Form } from "~/components/Form";
import { Select } from "~/components/Select";
import { RadioGroup } from "~/components/RadioGroup";

type FormValues = FormValuesByQuestions<DetailsQuestions>

const schema = yup.object().shape<Record<keyof FormValues, yup.AnySchema>>({
  age: yup.string().required('This field is Required'),
  gender: yup.string().required('This field is Required')
})

export const DetailsForm = forwardRef<FormRef, FormProps>(
  ({ onSubmit }, ref) => {
    const currentStep = useAppSelector(selectCurrentStep)
    const questions = currentStep?.questions as DetailsQuestions

    const {
      control,
      getValues,
      handleSubmit,
      formState: { errors },
    } = useForm<FormValues>({
      resolver: yupResolver(schema),
      defaultValues: {
        age: questions.age.answer,
        gender: questions.gender.answer,
      }
    })

    const ageOptions = useMemo(
      () => questions.age.options?.map?.((option) => (
        <Select.Option
          key={option.value}
          value={option.value}
        >
          {option.label}
        </Select.Option>
      )),
      [questions.age.options]
    )

    const genderOptions = useMemo(
      () => questions.gender.options?.map?.((option) => (
        <RadioGroup.Item
          key={option.value}
          value={option.value}
          label={option.label}
        />
      )),
      [questions.gender.options]
    )

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
        <Controller
          name="age"
          control={control}
          render={({ field: { onChange, value, ...field } }) => (
            <Select.Root
              label={questions.age.description}
              placeholder={questions.age.description}
              onValueChange={onChange}
              error={errors.age?.message}
              value={value}
              {...field}
            >
              {ageOptions}
            </Select.Root>
          )}
        />

        <Controller
          name="gender"
          control={control}
          render={({ field: { onChange, value, ...field } }) => (
            <RadioGroup.Root
              label={questions.gender.description}
              error={errors.gender?.message}
              onValueChange={onChange}
              value={value}
              {...field}
            >
              {genderOptions}
            </RadioGroup.Root>
          )}
        />
      </Form>
    );
  }
)
