import React from 'react';

function NavigationButtons({ c , v }) {
  const {changeMode, toggleExpanded } = c;
  function onAddQuestion() {
    changeMode('Add Question', {});
  }
  const toggleText = !v.expanded ? 'More Answered Questions' : 'Less Answered Questions';
  return (
    <>
      <button onClick={onAddQuestion}>Ask a Question</button>
      {v.empty && <button onClick={toggleExpanded} >{toggleText}</button> }
    </>
  );
}

export default NavigationButtons;
