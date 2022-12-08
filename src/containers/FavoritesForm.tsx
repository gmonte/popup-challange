import { forwardRef, useCallback, useImperativeHandle } from "react";
import { useForm } from "react-hook-form";
import { FormRef, FormProps, FormValuesByQuestions } from "~/@types/Form";
import { useAppSelector } from "~/store";
import { selectCurrentStep } from "~/store/steps/selectors";
import { FavoritesQuestions } from "~/store/steps/types";

export const FavoritesForm = forwardRef<FormRef, FormProps>(
  ({ onSubmit }, ref) => {
    const currentStep = useAppSelector(selectCurrentStep)
    const questions = currentStep?.questions as FavoritesQuestions

    const {
      register,
      getValues,
      handleSubmit,
      formState: { errors }
    } = useForm<FormValuesByQuestions<FavoritesQuestions>>();

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
          defaultValue={questions.favoriteBook.answer}
          placeholder={questions.favoriteBook.description}
          {...register("favoriteBook", { required: true }) }
        />
        {errors.favoriteBook && <span>This field is required</span>}

        <input
          defaultValue={questions.favoriteColor.answer}
          placeholder={questions.favoriteColor.description}
          {...register("favoriteColor", { required: true }) }
        />
        {errors.favoriteColor && <span>This field is required</span>}
      </form>
    );
  }
)
