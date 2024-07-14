import React, { useState, useEffect } from "react";
import NorthIcon from '@mui/icons-material/North';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

export default function BackToTopButton() {
  useEffect(() => {
    // Get the button:
  let mybutton = document.getElementById("BackToTopBtn");

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
  mybutton.addEventListener("click", () =>{
    topFunction();
  })
  },[])

  return (
  
      <button
        
        id="BackToTopBtn"
        title="Go to top"
        className=" rounded-lg shadow-lg"
      >
        <ArrowUpwardIcon/>
      </button>

  );
}
