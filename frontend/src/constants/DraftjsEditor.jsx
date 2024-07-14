import React, { useState } from 'react';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const DraftEditor = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const onEditorStateChange = (newEditorState) => {
    setEditorState(newEditorState);
  };

  return (
    <div className='border border-black min-h-72 bg-gray-100'>
      <Editor
        editorState={editorState}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        onEditorStateChange={onEditorStateChange}
        toolbar={{
          image: { uploadCallback: uploadImageCallBack, alt: { present: true, mandatory: true } },
        }}
      />
    </div>
  );
};

// Example upload callback for images
const uploadImageCallBack = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      resolve({ data: { link: reader.result } });
    };
    reader.readAsDataURL(file);
  });
};

export default DraftEditor;

