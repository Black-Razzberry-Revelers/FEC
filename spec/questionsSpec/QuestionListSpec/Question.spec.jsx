import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { question } from './qListMock';
import '@testing-library/jest-dom';

const Question = require('../../../client/src/components/Questions/QuestionList/Question').default;

jest.mock(
  '../../../client/src/components/Questions/QuestionList/AnswerList',
  () => function mockAnswerList({
    qid, v, c, answers,
  }) {
    return (<div> Mocked AnswerList</div>);
  },
);

describe('Question', () => {
  beforeEach(() => {

  });

  afterEach(() => {

  });

  it('should have components that display the question and who it was asked by', async () => {
    const qid = question.question_id;
    const v = {};
    const changeMode = jest.fn();
    const markQHelpful = jest.fn();
    const showAnswers = jest.fn();
    const c = { changeMode, markQHelpful, showAnswers };

    render(<Question question={question} qid={qid} v={v} c={c} />);
    expect.assertions(1);
    await screen.findByText('Numquam blanditiis libero facere eos.', { exact: false })
      .then((elem) => expect(elem).toBeVisible());
  });

  // it('should mark a question as helpful on click', () => {
  // });

  // it('should report a question on click', () => {
  // });

  // it('should pass sorted answers as props to the answerList component', () => {
  // });

  // it('should report a question on click', () => {
  // });

  // it('should Add an answer on click', () => {
  // });
});
