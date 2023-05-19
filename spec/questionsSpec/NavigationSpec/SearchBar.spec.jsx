import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import SearchBar from '../../../client/src/components/Questions/Navigation/SearchBar';

const c = { textSearch: jest.fn() };

describe('SearchBar', () => {
  it('Should call functions when there is typing', async () => {
    render(<SearchBar c={c} />);
    const userAction = screen.findByTestId('SearchForm').then((elem) => userEvent.click(elem)
      .then(() => userEvent.type(elem, 'Wot?')));
    await userAction.then(() => {
      expect(c.textSearch).toHaveBeenCalledTimes(4);
    });
  });
});
