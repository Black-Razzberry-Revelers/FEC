import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { answersRaw } from './qListMock';
import '@testing-library/jest-dom';

const AnswerList = require('../../../client/src/components/Questions/QuestionList/AnswerList').default;

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

// The answers list should:
// *  Display the text body of the answer on a new line
// * The username and date should display in the correct format.
// * If the answer is from from the seller it must display Seller in bold.
// * Display answers in order of helpfulness
// * Display seller answers at the top of the list
// *  should display "see more answers" only if there are more than two answers.
// * "See more answers" upon click should display the remainder of the list
// * The list should be confined to half of the screen
// * The list should be scrollable
// * When expanded, the button should display "Collapse Answers"
// * if "Collapse Answers" is clicked, the list should return to displaying only two answers
// * If Collapse Answers is clicked, it's text should again change to "See more Answers"
// * Answers should display images as clickable thumbnails
// *Clicking the thumbnail should open an image modal
