import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { questions } from './qListMock';
import '@testing-library/jest-dom';

const QuestionList = require('../../../client/src/components/Questions/QuestionList/QuestionList').default;

jest.mock('../../../client/src/components/Questions/QuestionList/Question', () => function Question({ question, qid }) {
  return (
    <div>
      Question #:
      {qid}
    </div>
  );
});
describe('Importing QuestionList', () => {
  const v = { questions, expanded: true };

  it('should not be undefined', async () => {
    render(<QuestionList v={v} />);
    await screen.findAllByText('Question #:', { exact: false }).then((responses) => {
      expect(responses.length).toEqual(questions.length);
    });
  });
});

// On Load It Should
//    * Load up to four questions on Default
//    * up to two answers should display for each question
//    * Other questions should NOT be visible

// If there are no questions on load
//     * The question list should collapse.
//     * The Submit a new Question should be more prominent

// Questions should
//     * Appear in order of Helpfulness
//     * Be filterable

// Each question should:
// * Display the question located at the top
// * Have the same layout as other questions
