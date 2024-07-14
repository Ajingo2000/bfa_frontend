import React, { useEffect, useState } from "react";
import background1 from "../assets/images/background19.jpg";
import background2 from "../assets/images/background3.jpg";
import background3 from "../assets/images/background16.jpg";
import background4 from "../assets/images/background18.jpg";
import axios from "axios";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import SermonVideoDiv from "./SermonVideoDiv";
import '../assets/css/imageSlider.css';

const ImageSlider = () => {
  const apiUrl = process.env.REACT_APP_API_URL; //${apiUrl}

  const [latestSermon, setLatestSermon] = useState([])

  useEffect(() =>{
   const fetchLatestSermons = async () => {
     let response = await axios.get(`${apiUrl}sermons`)
     setLatestSermon(response.data);
   }
 
   fetchLatestSermons()
   console.log(latestSermon)
 
  }, [])

  const [active, setActive] = useState(2);


  const loadShow = () => {
    latestSermon.forEach((sermon, index) => {
      const itemElement = document.getElementById(`image-item-${index}`);
      if (index === active) {
        itemElement.style.transform = `none`;
        itemElement.style.zIndex = 1;
        itemElement.style.filter = "none";
        itemElement.style.opacity = 1;
      } else if (index >= active) {
        let stt = index - active;
        itemElement.style.transform = `translateX(${120 * stt}px) scale(${
          1 - 0.2 * stt
        }) perspective(16px) rotateY(-1deg)`;
        itemElement.style.zIndex = -stt;
        itemElement.style.filter = "blur(5px)";
        itemElement.style.opacity = stt > 2 ? 0 : 0.6;
      } else {
        let stt = active - index;
        itemElement.style.transform = `translateX(${-120 * stt}px) scale(${
          1 - 0.2 * stt
        }) perspective(16px) rotateY(1deg)`;
        itemElement.style.zIndex = -stt;
        itemElement.style.filter = "blur(5px)";
        itemElement.style.opacity = stt > 2 ? 0 : 0.6;
      }
    });
  };

  useEffect(() => {
    loadShow();
  }, [active]);

  const handleNext = () => {
    setActive((prev) => (prev + 1 < latestSermon.length ? prev + 1 : prev));
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 >= 0 ? prev - 1 : prev));
  };
  return (
    <>
      <div className="w-full bg-inherit">
      <h1 className="font-extrabold text-[50px] text-center m-5">
        Sermon Archives!
      </h1>
      <p className="text-[20px]  text-center m-5">
        To see more posts or subscribe to the newsletter, click on the blogposts
        tab to view them. <a href="/sermons-archive" className="text-teal-300">Click here to view our archive</a>
      </p>

        <div className="image-slider">
          {latestSermon.map((sermon, index) => (
            <div
              key={index}
              id={`image-item-${index}`}
              className="image-item rounded-b-lg"
            >
              <img src={sermon.thumbnail} alt="" className={`size-full rounded-lg relative ${active?"box-shadow":""}`} />
              <p class="absolute text-white min-h-16 w-full p-2 text-center top-64 bg-black rounded-b-lg">
                {sermon.title}
                </p>  
            </div>
            
          ))}
          <button
            id="nextImage"
            className="nextImage"
            onClick={handleNext}
          >
            &gt;
          </button>
          <button
            id="prevImage"
            className=" prevImage font-extrabold"
            onClick={handlePrev}
          >
            &lt;
          </button>
        </div>
      </div>
    </>
  );
};

export default ImageSlider;
