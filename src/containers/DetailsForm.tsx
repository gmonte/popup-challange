import { forwardRef, useCallback, useImperativeHandle } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { FormRef, FormProps, FormValuesByQuestions } from "~/@types/Form";
import { useAppSelector } from "~/store";
import { selectCurrentStep } from "~/store/steps/selectors";
import { DetailsQuestions } from "~/@types/Steps";

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
      <form onSubmit={ (e) => e.preventDefault() }>
        <input
          defaultValue={questions.age.answer}
          placeholder={questions.age.description}
          { ...register("age", { required: true }) }
        />
        {errors.age && <span>This field is required</span>}

        <input
          defaultValue={questions.gender.answer}
          placeholder={questions.gender.description}
          { ...register("gender", { required: true }) }
        />
        {errors.gender && <span>This field is required</span>}
      </form>
    );
  }
)
