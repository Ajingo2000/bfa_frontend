import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import the Quill CSS

const QuillEditor = () => {
  const [content, setContent] = useState('');

  const handleChange = (value) => {
    setContent(value);
  };

  return (
    <div>
      <ReactQuill value={content} onChange={handleChange} />
    </div>
  );
};

export default QuillEditor;
