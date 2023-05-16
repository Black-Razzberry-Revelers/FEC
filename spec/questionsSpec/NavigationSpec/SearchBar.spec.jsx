import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

const SearchBar = require('../../../client/src/components/Questions/Navigation/SearchBar').default;

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
// Search questions should:
// *Have placeholder text
// *Update only once there are 3 typed characters
// *update with each character
// *Highlight matches
// * Show only questions which include the input text.
// *Should work well with sort and rating filters-
// *Should not be removed by sort and rating
// *Revert back to showing all questions once there are less than 3 characters
