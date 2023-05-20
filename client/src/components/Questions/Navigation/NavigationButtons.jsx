import React from 'react';

function NavigationButtons({ c, v }) {
  const { changeMode, toggleExpanded } = c;
  function onAddQuestion() {
    changeMode('Add Question', {});
  }
  const toggleText = !v.expanded ? 'More Answered Questions' : 'Less Answered Questions';
  return (
    <div id="Q-Nav-Buttons">
      <div onClick={onAddQuestion} className="show-button" id="ask-a-question" role="button" onKeyPress={onAddQuestion} tabIndex="0">Ask a Question</div>
      {v.empty && <div onClick={toggleExpanded} className="show-button" id="more-questions" role="button" onKeyPress={toggleExpanded} tabIndex="0">{toggleText}</div> }
    </div>
  );
}

export default NavigationButtons;
