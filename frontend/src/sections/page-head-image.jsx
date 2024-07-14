import React from "react";
import background4 from "../assets/images/kenrick-mills-1h2Pg97SXfA-unsplash.jpg";

export default function PageHeadImage(props) {
  const customBackground = {
    backgroundImage: `url(${!props.page_image?background4:props.page_image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    filter: "brightness(0.7)",
  };

  return (
    <div className="relative">
      <div className="relative  h-48" style={customBackground}>
      </div>
      <p className="absolute top-16 left-0 right-0 text-center text-white text-3xl font-extrabold tracking-tight p-4">{props.name}</p>
    </div>
  );
}
