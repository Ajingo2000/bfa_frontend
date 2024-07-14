import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom"
import bulblights from "../assets/images/rope4-removebg-preview.png";
import great_unlit_rope from "../assets/images/rope5_great-removebg-preview.png";
import clear_bulb_rope from "../assets/images/clear_rope_light-removebg-preview.png";
import bulb_lighting_rope from "../assets/images/bob_lighting_rope-removebg-preview.png";
import { Carousel } from "flowbite-react";
import product1 from "../assets/images/product1.jpg";
import product2 from "../assets/images/product2.jpg";
import product3 from "../assets/images/product3.jpg";
import background2 from "../assets/images/background3.jpg";
import background3 from "../assets/images/background16.jpg";
import background4 from "../assets/images/background18.jpg";

const HeroSection = () => {
  const sliders = [
    {
      image: background2,
      heading: "Reaching Africa Throught the Gospel.",
      subheading: "“Preach the gospel” (Mark 16:15)",
    },
    {
      image: background3,
      heading: "Bible Preaching",
      subheading: "“Preach the word” (II Timothy 4:2)",
    },
    {
      image: background4,
      heading: "Soul Winning",
      subheading: "“Preach the gospel” (Mark 16:15)",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? sliders.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    console.log(
      `The next image has been clicked! We are at the image[${newIndex}]`
    );
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === sliders.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    console.log(
      `The next image has been clicked! We are at the image[${newIndex}]`
    );
  };

  return (
    <div class="flex justify-between ">
      <div class="absolute left-0  w-20 md:h-full md:w-auto ">
        <img src={great_unlit_rope} alt="" className="" />
      </div>

       <div className="h-[450px] bg-black">
      <Carousel pauseOnHover>
        {sliders.map((slide =>(

            <img src={slide.image} alt={slide.heading} />
        )
        ))}
      </Carousel>
    </div>

      <div class="absolute right-0 w-20 md:h-full md:w-auto">
        <img src={great_unlit_rope} alt="" className="" />
      </div>
    </div>
  );
};

export default HeroSection;
