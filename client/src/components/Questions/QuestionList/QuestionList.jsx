import React from 'react';
import Question from './Question';

function QuestionList({ v, c }) {
  const { questions } = v;

  let sort = questions.sort((a, b) => {
    if (a.question_helpfulness < b.question_helpfulness) {
      return 1;
    }
    if (a.question_helpfulness > b.question_helpfulness) {
      return -1;
    }
    return 0;
  });
  if (!v.expanded) {
    sort = sort.slice(0, 2);
  }

  return (
    <div id="question-viewport">

      {sort.map((q) => (
        <Question question={q} key={q.question_id} qid={q.question_id} v={v} c={c} />
      ))}

    </div>
  );
}

export default QuestionList;
