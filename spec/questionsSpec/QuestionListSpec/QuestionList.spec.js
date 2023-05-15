import react from 'react';

const QuestionList = require('../../client/src/components/Questions/QuestionList/QuestionList').default;

describe('Importing QuestionList', () => {
  test('should not be undefined', () => {
    expect(QuestionList).not.toBe(undefined);
  });
});

// On Load It Should
//    * Load up to four questions on Default
//    * up to two answers should display for each question
//    * Other questions should NOT be visible

// If there are no questions on load
//     * The question list should collapse.
//     * The Submit a new Question should be more prominent

// Questions should
//     * Appear in order of Helpfulness
//     * Be filterable

// Each question should:
// * Display the question located at the top
// * Have the same layout as other questions
