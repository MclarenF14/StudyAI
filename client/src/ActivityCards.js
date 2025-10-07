import React from 'react';
import './ActivityCards.css';
import { FaQuestionCircle, FaRegClone, FaGamepad } from 'react-icons/fa';

const activities = [
  {
    key: 'quiz',
    icon: <FaQuestionCircle size={48} color="#6a7bff" />,
    title: 'Quiz',
    desc: 'Test your knowledge with custom quizzes from your notes.',
    button: 'Start Quiz',
  },
  {
    key: 'flashcards',
    icon: <FaRegClone size={48} color="#b47cff" />,
    title: 'Flashcards',
    desc: 'Review key concepts with interactive flashcards.',
    button: 'View Flashcards',
  },
  {
    key: 'game',
    icon: <FaGamepad size={48} color="#38e8ff" />,
    title: 'Game',
    desc: 'Make learning fun with educational games.',
    button: 'Play Game',
  },
];

function ActivityCards({ onSelect }) {
  return (
    <section className="activity-cards-grid">
      {activities.map(act => (
        <div className="activity-card" key={act.key}>
          <div className="activity-icon">{act.icon}</div>
          <h3 className="activity-title">{act.title}</h3>
          <p className="activity-desc">{act.desc}</p>
          <button className="activity-btn" onClick={() => onSelect(act.key)}>
            {act.button}
          </button>
        </div>
      ))}
    </section>
  );
}

export default ActivityCards;
