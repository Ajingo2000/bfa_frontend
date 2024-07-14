import React from 'react'

const PlainText = (props) => {
    // Cleaning up the blog content
    const div = document.createElement("div");
    div.innerHTML = `${props.input}`;
  
    const plainText = div.innerText;
    console.log(plainText)
  
    return plainText;
  };
  
  export default PlainText;