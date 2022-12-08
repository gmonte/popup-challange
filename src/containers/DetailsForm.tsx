import { forwardRef, useCallback, useImperativeHandle } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { FormRef, FormProps, FormValuesByQuestions } from "~/@types/Form";
import { useAppSelector } from "~/store";
import { selectCurrentStep } from "~/store/steps/selectors";
import { DetailsQuestions } from "~/@types/Steps";
import { Form } from "~/components/Form";
import { TextInput } from "~/components/TextInput";

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
        <TextInput.Root error={errors.age?.message}>
          <TextInput.Input
            defaultValue={questions.age.answer}
            placeholder={questions.age.description}
            {...register("age", { required: true })}
          />
        </TextInput.Root>

        <TextInput.Root error={errors.gender?.message}>
          <TextInput.Input
            defaultValue={questions.gender.answer}
            placeholder={questions.gender.description}
            {...register("gender", { required: true })}
          />
        </TextInput.Root>
      </Form>
    );
  }
)
