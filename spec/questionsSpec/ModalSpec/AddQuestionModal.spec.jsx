import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { requests } from '../../../client/src/components/requests';

const AddQuestionModal = require('../../../client/src/components/Questions/Modals/AddQuestionModal').default;

const v = { pid: 426, modeProps: { qid: 9000, question: { question_body: 'Testing' } } };

jest.mock('../../../client/src/components/requests');
requests.post.question.mockResolvedValue("Happy");

describe('AddQuestionModal', () => {
  it("Should Accept typed Text in it's form and pass it as arguments to post.", async () => {
    const c = { changeMode: jest.fn() };
    render(<AddQuestionModal v={v} c={c} />);
    const elemAr = [];

    const action1 = () => screen.findByTestId('question-input')
      .then((elem) => userEvent.click(elem).then(() => {
        elemAr.push(elem);
        return userEvent.type(elem, "I don't have a Question");
      }));

    const action2 = () => screen.findByTestId('question-nickname-input').then((elem) => userEvent.click(elem).then(() => {
      elemAr.push(elem);
      return userEvent.type(elem, 'Tester');
    }));

    const action3 = () => screen.findByTestId('question-email-input').then((elem) => userEvent.click(elem).then(() => {
      elemAr.push(elem);
      return userEvent.type(elem, 'testing@gmail.com');
    }));
    const runall = async () => {
      await action1();
      await action2();
      await action3();
    };
    await runall();
    expect(elemAr[0]).toHaveDisplayValue("I don't have a Question");
    expect(elemAr[1]).toHaveValue('Tester');
    expect(elemAr[2]).toHaveValue('testing@gmail.com');
    await screen.findByTestId('question-submit').then((elem) => userEvent.click(elem));
    expect(requests.post.question).toHaveBeenCalledWith(v.pid, "I don't have a Question", 'Tester', 'testing@gmail.com');
  });
});
