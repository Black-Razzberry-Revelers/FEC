import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { requests } from '../../../client/src/components/requests';
import AddAnswerModal from '../../../client/src/components/Questions/Modals/AddAnswerModal';

const v = { pid: 426, modeProps: { qid: 9000, question: { question_body: 'Testing' } } };

jest.mock('../../../client/src/components/requests');
requests.post.answer.mockResolvedValue('Happy');

describe('AddAnswerModal', () => {
  it("Should Accept typed Text in it's form and pass it as arguments to post.", async () => {
    const c = { changeMode: jest.fn() };
    render(<AddAnswerModal v={v} c={c} />);
    const elemAr = [];

    const action1 = () => screen.findByTestId('answer-input')
      .then((elem) => userEvent.click(elem).then(() => {
        elemAr.push(elem);
        return userEvent.type(elem, "I don't know the Answer");
      }));

    const action2 = () => screen.findByTestId('answer-nickname-input').then((elem) => userEvent.click(elem).then(() => {
      elemAr.push(elem);
      return userEvent.type(elem, 'Tester');
    }));

    const action3 = () => screen.findByTestId('answer-email-input').then((elem) => userEvent.click(elem).then(() => {
      elemAr.push(elem);
      return userEvent.type(elem, 'testing@gmail.com');
    }));
    const runall = async () => {
      await action1();
      await action2();
      await action3();
    };
    await runall();
    expect(elemAr[0]).toHaveDisplayValue("I don't know the Answer");
    expect(elemAr[1]).toHaveValue('Tester');
    expect(elemAr[2]).toHaveValue('testing@gmail.com');
    await screen.findByTestId('answer submit').then((elem) => userEvent.click(elem));
    expect(requests.post.answer).toHaveBeenCalledWith(v.pid, v.modeProps.qid, "I don't know the Answer", 'Tester', 'testing@gmail.com');
  });
});
