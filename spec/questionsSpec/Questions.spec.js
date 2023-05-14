import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import axios from 'axios';

const Questions = require('../../client/src/components/Questions/Questions').default;

const user = userEvent.setup();

describe('Questions Component', () => {
  render(<Questions product_id={40420}/>);
  test('It should query the API and get the values associated with the ID.', () => {
  // wait until the Get has run
    const results = [];
    const wait = new Promise((resolve, reject) => {
      const rslv = () => resolve('done');
      setTimeout(rslv, 1000);
    });
    // run a parallel get request
    const data = axios({
      url: `${process.env.URL}/qa/questions`,
      method: 'GET',
      params: {
        product_id: 40420,
        page: 1,
        count: 1000,
      },
      headers: {
        Authorization: `${process.env.TOKEN}`,
      },
    }).then((val) => {
      results.push(...val.data.results);
    });
  // Once both have run, let's check to see if
    Promise.all([data, wait]).then(() => {
      user.click(screen.findByText('More Answered Questions'))
        .then(() => {
          results.forEach((question) => {
            expect(screen.getByText(question.question_body, { exact: false }).toBeDefined());
          });
        });
    });
  });
});
