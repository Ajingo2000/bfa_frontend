import React from 'react'

const ImageBackground = ({bg_image}) => {
  const customBackground = {
    backgroundImage: `url(${bg_image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    filter: "brightness(0.7)",
  };
  return (
    customBackground
  )
}

export default ImageBackground