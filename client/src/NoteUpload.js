import React, { useState } from 'react';
import Tesseract from 'tesseract.js';

function NoteUpload({ onExtractedText }) {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [ocrText, setOcrText] = useState('');

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!image) return;
    setLoading(true);
    const { data: { text } } = await Tesseract.recognize(image, 'eng');
    setOcrText(text);
    setLoading(false);
    onExtractedText(text);
  };

  return (
    <div>
      <h2>Upload Note Photo</h2>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={loading || !image}>
        {loading ? 'Extracting...' : 'Extract Text'}
      </button>
      {ocrText && (
        <div>
          <h3>Extracted Text:</h3>
          <pre>{ocrText}</pre>
        </div>
      )}
    </div>
  );
}

export default NoteUpload;
