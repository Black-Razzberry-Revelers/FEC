import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Questions from '../../client/src/components/Questions/Questions';

jest.mock('../../client/src/components/Questions/QuestionList/QuestionList', () => function QuestionList({ v, c }) {
  const toggleText = Object.keys(c).length === 7 ? '7 functions got Passed' : 'Not 7 Functions got Passed';
  return (
    <div>
      {toggleText}
    </div>
  );
});
const user = userEvent.setup();

describe('Questions Component', () => {
  test('It should display our 3 main components', () => {
    render(<Questions product_id={40420} />);
    expect(screen.findByTestId('SearchBar').resolves.toBeDefined());
    expect(screen.findByTestId('QuestionList').resolves.toBeDefined());
    expect(screen.findByTestId('NavigationButtons').resolves.toBeDefined());
  });
  test('It should Pass 7 functions', async () => {
    render(<Questions product_id={40420} />);
    await screen.getByText('7 functions got Passed').then((elem) => {
      expect(elem).toHaveTextContent('7 functions got Passed');
    });
  });
});
