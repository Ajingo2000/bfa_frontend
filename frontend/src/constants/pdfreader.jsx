import React from "react";
import { useState } from "react";
import { Worker } from "@react-pdf-viewer/core";
import { Viewer } from "@react-pdf-viewer/core";
// Import the styles
import "@react-pdf-viewer/core/lib/styles/index.css";
// Default layout Plugins
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
// Import styles
import "@react-pdf-viewer/default-layout/lib/styles/index.css";


function MyPDFViewer(props) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <>
  
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
        <Viewer fileUrl={props.pdf_url} plugins={[defaultLayoutPluginInstance]}/>
      </Worker>

    </>
  );
}

export default MyPDFViewer;





