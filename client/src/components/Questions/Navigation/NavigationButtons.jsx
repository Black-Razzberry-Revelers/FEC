import React from 'react';

function NavigationButtons({ c , v }) {
  const {changeMode, toggleExpanded } = c;
  function onAddQuestion() {
    changeMode('Add Question', {});
  }
  const toggleText = !v.expanded ? 'More Answered Questions' : 'Less Answered Questions';
  return (
    <div id="Q-Nav-Buttons">
      <div onClick={onAddQuestion} className="show-button" id="ask-a-question">Ask a Question</div>
      {v.empty && <div onClick={toggleExpanded} className="show-button" id="more-questions">{toggleText}</div> }
    </div>
  );
}

export default NavigationButtons;
