import { forwardRef, useCallback, useImperativeHandle, useMemo } from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { FormRef, FormProps, FormValuesByQuestions } from "~/@types/Form";
import { useAppSelector } from "~/store";
import { selectCurrentStep } from "~/store/steps/selectors";
import { DetailsQuestions } from "~/@types/Steps";
import { Form } from "~/components/Form";
import { TextInput } from "~/components/TextInput";
import { Select } from "~/components/Select";
import { SelectRoot } from "~/components/Select/SelectRoot";
import uuid from "short-uuid";
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
      register,
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
      () => [...Array(100)].map((_, index) => (
        <Select.Option
          key={uuid().generate()}
          value={(index + 1).toString()}
        >
          {index + 1}
        </Select.Option>
      )),
      []
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
          render={({ field: { onChange, ...field } }) => (
            <Select.Root
              label={questions.age.description}
              placeholder={questions.age.description}
              onValueChange={onChange}
              error={errors.age?.message}
              {...field}
            >
              {ageOptions}
            </Select.Root>
          )}
        />

        <Controller
          name="gender"
          control={control}
          render={({ field: { onChange, ...field } }) => (
            <RadioGroup.Root
              label={questions.gender.description}
              error={errors.gender?.message}
              onValueChange={onChange}
              {...field}
            >
              <RadioGroup.Item value="woman" label="Woman" />
              <RadioGroup.Item value="man" label="Man" />
              <RadioGroup.Item value="transgender" label="Transgender" />
              <RadioGroup.Item value="non-binary" label="Non-binary / Non-confirming" />
              <RadioGroup.Item value="no-respond" label="Prefer not to respond" />
            </RadioGroup.Root>
          )}
        />

        
      </Form>
    );
  }
)
