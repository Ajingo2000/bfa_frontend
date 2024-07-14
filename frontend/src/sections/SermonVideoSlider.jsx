import React, { useEffect, useState } from "react";
import background1 from "../assets/images/background19.jpg";
import background2 from "../assets/images/background3.jpg";
import background3 from "../assets/images/background16.jpg";
import background4 from "../assets/images/background18.jpg";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import '../assets/css/imageSlider.css';
import SermonVideoDiv from "./SermonVideoDiv";
import axios from "axios";


const SermonVideoSlider = () => {
  const [active, setActive] = useState(3);
  const [latestSermon, setLatestSermon] = useState([]);
const apiUrl = process.env.REACT_APP_API_URL; //${apiUrl}


  useEffect(() => {
    const fetchLatestSermon = async () => {
      const response = await axios.get(`${apiUrl}sermons`);
      setLatestSermon(response.data);
    };

    fetchLatestSermon();
  }, []);
  const loadShow = () => {
    latestSermon.forEach((item, index) => {
      const itemElement = document.getElementById(`image-item-${index}`);
      if (index === active) {
        itemElement.style.transform = `none`;
        itemElement.style.zIndex = 1;
        itemElement.style.filter = "none";
        itemElement.style.opacity = 1;
      } else if (index > active) {
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
        <h1 className="font-extrabold heading">Our Gallery</h1>

        <div className="image-slider">
          {latestSermon.map((sermon, index) => (
             
             sermon.sermon_category && (
               <div className="carousel-item">
                 <SermonVideoDiv
                   key={index}
                   link={`/sermon-details/${sermon.slug}`}
                   image={sermon.thumbnail}
                   title={sermon.title}
                   preacher={sermon.preached_by}
                   category={sermon.sermon_category.title}
                 />
               </div>

             )
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
            className=" prevImage"
            onClick={handlePrev}
          >
            &lt;
          </button>
        </div>
      </div>
    </>
  );
};

export default SermonVideoSlider;

