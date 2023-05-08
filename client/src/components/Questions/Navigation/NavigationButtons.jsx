import React from 'react';

function NavigationButtons({ changeMode, toggle, collapsed }) {
  function onAddQuestion() {
    changeMode('Add Question', {});
  }
  const toggleText = collapsed ? 'More Answered Questions' : 'Less Answered Questions';
  return (
    <>
      <button onClick={onAddQuestion}>Ask a Question</button>
      <button onClick={toggle}>{toggleText}</button>
    </>
  );
}

export default NavigationButtons;
