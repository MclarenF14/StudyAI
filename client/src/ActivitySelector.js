import React, { useState } from 'react';

function ActivitySelector({ extractedText, onSelect }) {
  const [activity, setActivity] = useState('quiz');
  const [questionCount, setQuestionCount] = useState(5);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSelect(activity, questionCount);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Choose Activity</h2>
      <label>
        Type:
        <select value={activity} onChange={e => setActivity(e.target.value)}>
          <option value="quiz">Quiz</option>
          <option value="flashcards">Flashcards</option>
          <option value="game">Game</option>
        </select>
      </label>
      <br />
      <label>
        Number of Questions:
        <input
          type="number"
          min={1}
          max={50}
          value={questionCount}
          onChange={e => setQuestionCount(Number(e.target.value))}
        />
      </label>
      <br />
      <button type="submit" disabled={!extractedText}>
        Generate
      </button>
    </form>
  );
}

export default ActivitySelector;
