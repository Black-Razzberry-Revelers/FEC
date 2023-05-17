import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { answer } from './qListMock';
import '@testing-library/jest-dom';
import Answer from '../../../client/src/components/Questions/QuestionList/Answer';

describe('Answer', () => {
  const markAHelpful = jest.fn();
  const reportAnswer = jest.fn();
  const c = { markAHelpful, reportAnswer };
  const qid = 329705;
  const aid = 3080106;

  it('Should display the values of an inputted answer', async () => {
    render(<Answer c={c} qid={qid} aid={aid} answer={answer} />);
    const name = screen.findByText('by:', { exact: false });
    const body = screen.findByText('Answer:', { exact: false });
    const date = screen.findByText('on:', { exact: false });
    expect.assertions(3);
    await Promise.all([name, body, date]).then((resolutions) => {
      expect(resolutions[0]).toHaveTextContent('Delmer5');
      expect(resolutions[1]).toHaveTextContent('Soluta maxime libero et dolor impedit ut.');
      expect(resolutions[2]).toHaveTextContent('2020-08-23T00:00:00.000Z');
    });
  });

  it('should call MarkAHelpful and Report Answer when clicked', async () => {
    render(<Answer c={c} qid={qid} aid={aid} answer={answer} />);
    const helpfulElem = screen.findByText('Yes').then((elem) => userEvent.click(elem));
    const reportElem = screen.findByText('Report').then((elem) => userEvent.click(elem));
    expect.assertions(2);
    await Promise.all([helpfulElem, reportElem]).then(() => {
      expect(markAHelpful).toHaveBeenCalled();
      expect(reportAnswer).toHaveBeenCalled();
    });
  });
});
