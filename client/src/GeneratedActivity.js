import React from 'react';

function generateQuiz(text, count) {
  // Simple placeholder: split text into sentences and make questions
  const sentences = text.split('.').map(s => s.trim()).filter(Boolean);
  return sentences.slice(0, count).map((sentence, idx) => ({
    question: `What is the meaning of: "${sentence}"?`,
    answer: sentence
  }));
}

function generateFlashcards(text, count) {
  // Simple placeholder: split text into lines
  const lines = text.split('\n').map(l => l.trim()).filter(Boolean);
  return lines.slice(0, count).map((line, idx) => ({
    front: `Term ${idx + 1}`,
    back: line
  }));
}

function generateGame(text, count) {
  // Simple placeholder: word scramble game
  const words = text.split(/\s+/).filter(Boolean);
  return words.slice(0, count).map((word, idx) => ({
    scrambled: word.split('').sort(() => 0.5 - Math.random()).join(''),
    answer: word
  }));
}

function GeneratedActivity({ activity, text, count }) {
  let content = null;
  if (activity === 'quiz') {
    const quiz = generateQuiz(text, count);
    content = (
      <div>
        <h2>Quiz</h2>
        {quiz.map((q, i) => (
          <div key={i}>
            <strong>Q{i + 1}:</strong> {q.question}
            <br />
            <em>Answer:</em> {q.answer}
            <hr />
          </div>
        ))}
      </div>
    );
  } else if (activity === 'flashcards') {
    const flashcards = generateFlashcards(text, count);
    content = (
      <div>
        <h2>Flashcards</h2>
        {flashcards.map((card, i) => (
          <div key={i}>
            <strong>{card.front}</strong>
            <br />
            <em>{card.back}</em>
            <hr />
          </div>
        ))}
      </div>
    );
  } else if (activity === 'game') {
    const games = generateGame(text, count);
    content = (
      <div>
        <h2>Word Scramble Game</h2>
        {games.map((g, i) => (
          <div key={i}>
            <strong>Scrambled:</strong> {g.scrambled}
            <br />
            <em>Answer:</em> {g.answer}
            <hr />
          </div>
        ))}
      </div>
    );
  }
  return <div>{content}</div>;
}

export default GeneratedActivity;
