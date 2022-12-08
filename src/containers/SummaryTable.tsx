import { useAppSelector } from "~/store";
import { selectAllQuestions } from "~/store/steps/selectors";

export function SummaryTable() {
  const allQuestions = useAppSelector(selectAllQuestions)

  return (
    <ul>
      {Object.entries(allQuestions).map(([questionId, question]) => (
        <li key={questionId}>
          {question.description}: {question.answer}
        </li>
      ))}
    </ul>
  );
}
