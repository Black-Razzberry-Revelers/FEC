import React from 'react';

function NavigationButtons({ c , v }) {
  const {changeMode, toggleExpanded } = c;
  function onAddQuestion() {
    changeMode('Add Question', {});
  }
  const toggleText = !v.expanded ? 'More Answered Questions' : 'Less Answered Questions';
  return (
    <>
      <button onClick={onAddQuestion} className="show-button">Ask a Question</button>
      {v.empty && <button onClick={toggleExpanded} className="show-button">{toggleText}</button> }
    </>
  );
}

export default NavigationButtons;
