import React from 'react';

const PdfIframe = ({ pdfUrl }) => {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <iframe
        src={pdfUrl}
        width="100%"
        height="600px"
        style={{ border: 'none' }}
        title="PDF Viewer"
      >
        This browser does not support PDFs. Please download the PDF to view it: 
        <a href={pdfUrl}>Download PDF</a>
      </iframe>
    </div>
  );
};

export default PdfIframe;
