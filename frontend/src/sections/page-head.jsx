import React from "react";
import background4 from "../assets/images/kenrick-mills-1h2Pg97SXfA-unsplash.jpg";

export default function PageHead(props) {
  const customBackground = {
    backgroundImage: `url(${!props.page_image?background4:props.page_image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    filter: "brightness(0.7)",
  };

  return (
    <div className="bg-gradient-to-r from-blue-300 to-teal-100 h-24 bfaColor">
      <p className="text-center text-3xl font-extrabold tracking-tight p-4">{props.name}</p>      
    </div>
  );
}
