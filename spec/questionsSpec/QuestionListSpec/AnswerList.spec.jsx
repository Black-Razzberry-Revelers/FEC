import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { answersRaw } from './qListMock';
import '@testing-library/jest-dom';
import AnswerList from '../../../client/src/components/Questions/QuestionList/AnswerList';

jest.mock(
  '../../../client/src/components/Questions/QuestionList/Answer',
  () => function Answer({
    aid,
  }) {
    return (
      <div>
        Mocked Answer #:
        {aid}
      </div>
    );
  },
);
describe('AnswerList', () => {
  it('should render a div with each answer ID', async () => {
    const qid = 329705;
    const v = { questions: [{ question_id: 329705, showMore: true }] };
    const answerIDS = Object.keys(answersRaw);
    const answers = answerIDS.map((id) => answersRaw[id]);

    render(<AnswerList qid={qid} v={v} answers={answers} />);
    await screen.findAllByText('Mocked Answer #', { exact: false }).then((elems) => {
      elems.forEach((elem) => expect(elem).toBeInTheDocument());
    });
  });
});
