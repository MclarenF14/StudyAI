import React, { useState } from 'react';
import GoogleLoginButton from './GoogleLoginButton';
import Header from './Header';
import UploadSection from './UploadSection';
import ActivityCards from './ActivityCards';
import ActivitySelector from './ActivitySelector';
import GeneratedActivity from './GeneratedActivity';
import './App.css';

function App() {
  const [user, setUser] = useState(null);
  const [extractedText, setExtractedText] = useState('');
  const [activity, setActivity] = useState(null);
  const [questionCount, setQuestionCount] = useState(0);

  const handleLoginSuccess = (credentialResponse) => {
    setUser(credentialResponse);
  };

  const handleExtractedText = (text) => {
    setExtractedText(text);
  };

  const handleActivitySelect = (selectedActivity, count) => {
    setActivity(selectedActivity);
    setQuestionCount(count);
    // Next: Generate quiz/flashcards/game based on extractedText, selectedActivity, and count
  };

  const [selectedFile, setSelectedFile] = useState(null);
  const [showCards, setShowCards] = useState(false);

  const handleFileSelect = (file) => {
    setSelectedFile(file);
    setShowCards(true);
  };

  const handleCardSelect = (cardType) => {
    setActivity(cardType);
    setQuestionCount(5); // Default, can add selector later
  };

  return (
    <div className="app-container">
      <Header />
      {!user ? (
        <GoogleLoginButton onLoginSuccess={handleLoginSuccess} />
      ) : (
        <>
          <UploadSection onFileSelect={handleFileSelect} />
          {showCards && !activity && (
            <ActivityCards onSelect={handleCardSelect} />
          )}
          {activity && selectedFile && (
            <div className="generated-section">
              {/* Use NoteUpload for OCR, then show GeneratedActivity */}
              <NoteUpload onExtractedText={setExtractedText} />
              {extractedText && (
                <GeneratedActivity activity={activity} text={extractedText} count={questionCount} />
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default App;
