import React from 'react'

const AuthorCleanUp = (props) => {
    // Cleaning up the blog content
    const div = document.createElement("div");
    div.innerHTML = `${props.input}`;
  
    // Truncating the blog content body
    let content = div.innerText;
    let max_length = props.maxLength
    const truncatedContent = content.length > max_length 
      ? content.slice(0, max_length) + "..." // Add ellipsis if content is too long
      : content;
  
    return truncatedContent;
}

export default AuthorCleanUp