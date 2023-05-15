import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import axios from 'axios';

const Questions = require('../../client/src/components/Questions/Questions').default;

const user = userEvent.setup();

describe('Questions Component', () => {
  render(<Questions product_id={40420} />);
  test('It should query the API and display 2 questions.', () => {
    expect(screen.findByText("Numquam blanditiis libero facere eos.").resolves.toBeDefined());
  });
  // test('It should query the API and get the values associated with the ID.', () => {
  // // wait until the Get has run
  //   const results = [];
  //   const wait = new Promise((resolve, reject) => {
  //     const rslv = () => resolve('done');
  //     setTimeout(rslv, 1000);
  //   });
  //   // run a parallel get request
  //   const data = axios({
  //     url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp
  //     /qa/questions`,
  //     method: 'GET',
  //     params: {
  //       product_id: 40420,
  //       page: 1,
  //       count: 1000,
  //     },
  //     headers: {
  //       Authorization: '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',
  //     },
  //   }).then((val) => {
  //     results.push(...val.data.results);
  //   });
  //   // Once both have run, we'll click on the button 'More Answered Questions' and see
  //   // if we can find the same values from our axios request as in it.
  //   return Promise.all([data, wait]).then(() => user.click(screen.findByText('More Answered Questions'))
  //     .then(() => {
  //       expect(results.length).toBeGreaterThan(0);
  //       results.forEach((question) => {
  //         console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>', question);
  //         expect(screen.getByText(question.question_body, { exact: false }).toBeDefined());
  //       });
  //     }));
  // });
});
