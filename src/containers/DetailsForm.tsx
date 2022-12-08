import { forwardRef, useCallback, useImperativeHandle } from "react";
import { useForm } from "react-hook-form";
import { FormRef, FormProps, FormValuesByQuestions } from "~/@types/Form";
import { useAppSelector } from "~/store";
import { selectCurrentStep } from "~/store/steps/selectors";
import { DetailsQuestions } from "~/store/steps/types";

export const DetailsForm = forwardRef<FormRef, FormProps>(
  ({ onSubmit }, ref) => {
    const currentStep = useAppSelector(selectCurrentStep)
    const questions = currentStep?.questions as DetailsQuestions

    const {
      register,
      getValues,
      handleSubmit,
      formState: { errors }
    } = useForm<FormValuesByQuestions<DetailsQuestions>>();

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
