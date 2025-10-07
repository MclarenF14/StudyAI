import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="app-title">StudySnap</h1>
        <p className="tagline">Turn your notes into fun learning.</p>
      </div>
    </header>
  );
}

export default Header;
