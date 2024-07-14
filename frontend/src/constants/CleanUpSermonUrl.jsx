import React from "react";

const CleanedUpSermonUrl = (props) => {
    // Cleaning up the blog content
    const div = document.createElement("div");
    div.innerHTML = `${props.iframeUrl}`;
  
    // Truncating the blog content body
    let cleanedContent = div;
    
  
    return cleanedContent;
  };

  export default CleanedUpSermonUrl;