import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

const NavigationButtons = require('../../../client/src/components/Questions/Navigation/NavigationButtons').default;

const changeMode = jest.fn();
const toggleExpanded = jest.fn();
const c = {
  changeMode, toggleExpanded,
};
const v = { expanded: false, empty: true };

describe('Navigation Buttons', () => {
  it('Should call toggleExpanded and changeMode when the buttons are clicked on.', async () => {
    render(<NavigationButtons c={c} v={v} />);
    const clickToggle = screen.findByText('More Answered Questions').then((elem) => userEvent.click(elem));
    const clickAsk = screen.findByText('Ask A Question', {exact:false}).then((elem) => userEvent.click(elem));
    expect.assertions(2);
    await Promise.all([clickToggle, clickAsk]).then((resolutions) => {
      expect(changeMode).toHaveBeenCalled();
      expect(toggleExpanded).toHaveBeenCalled();
    });
  });
});
// If there are no questions on load
// * The question list should collapse.
// * The Submit a new Question should be more prominent
