import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { answer } from './qListMock';
import '@testing-library/jest-dom';
// Helpful should
//  * Dynamically display the count of selections.
//  * Onclick should increase the count once.
//  * a customers should not be able to vote more than once per question.
// *  Display for both answers and questions

// Report should
// * Mark an answer for internal review on click
// * Only be clickable by a user once.
// * Change to static text saying "Reported" once clicked