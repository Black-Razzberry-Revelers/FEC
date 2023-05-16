import React from 'react';
import Question from './Question';

function QuestionList({ v, c }) {
  function onScroll() {}
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

  const style = {
    width: '95vh',
    maxHeight: '80vh',
    overflow: 'auto',
  };

  return (
    <div id="QuestionViewport" style={style}>
      <div id="QuestionStrip">
        {sort.map((q) => (<Question question={q} key={q.question_id} qid={q.question_id} v={v} c={c} />))}
      </div>
    </div>
  );
}

export default QuestionList;
