import React from "react";

const CleanUp = (props) => {
  // Cleaning up the blog content
  const div = document.createElement("div");
  div.innerHTML = `${props.input}`;

  // Truncating the blog content body
  let content = div.innerText;
  let max_length = props.max_length || 150;
  const truncatedContent = content.length > max_length 
    ? content.slice(0, max_length) + "..." // Add ellipsis if content is too long
    : content;

  return truncatedContent;
};

export default CleanUp;

