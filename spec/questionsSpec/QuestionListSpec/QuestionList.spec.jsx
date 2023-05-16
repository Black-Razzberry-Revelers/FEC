import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { questions } from './qListMock';
import '@testing-library/jest-dom';
import QuestionList from '../../../client/src/components/Questions/QuestionList/QuestionList';

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
