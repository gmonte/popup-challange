import { Fragment } from "react";
import { List } from "~/components/List";
import { useAppSelector } from "~/store";
import { selectAllQuestions } from "~/store/steps/selectors";

export function SummaryTable() {
  const allQuestions = useAppSelector(selectAllQuestions)

  return (
    <List.Root numberOfColumns={ 2 }>
      {Object.entries(allQuestions).map(([questionId, question]) => (
        <Fragment key={questionId}>
          <List.Item style={{textAlign: 'right'}}>
            {question.description}{':'}
          </List.Item>
          <List.Item style={{fontWeight: 'bold'}}>
            {
              Array.isArray(question.answer)
                ? question.answer?.join(', ')
                : question.answer || '-'
            }
          </List.Item>
        </Fragment>
      ))}
    </List.Root>
  );
}
