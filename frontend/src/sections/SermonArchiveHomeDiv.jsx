import React, { useEffect, useState } from "react";
import background1 from "../assets/images/background19.jpg";
import background2 from "../assets/images/background3.jpg";
import background3 from "../assets/images/background16.jpg";
import background4 from "../assets/images/background18.jpg";
import axios from "axios";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import SermonVideoDiv from "./SermonVideoDiv";
import "../assets/css/imageSlider.css";
import NoDataFoundDiv from "../constants/NoDataFoundDiv";



const SermonArchiveHomeDiv = () => {
  const [latestSermon, setLatestSermon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const apiUrl = process.env.REACT_APP_API_URL; //${apiUrl}


  useEffect(() => {
    const fetchLatestSermons = async () => {
      try {
        let response = await axios.get(`${apiUrl}sermons`);
        setLatestSermon(response.data);
        setError(null); // Clear any previous errors
      } catch (err) {
        if (err.response) {
          // Server responded with a status other than 200 range
          console.error("Error response:", err.response);
          setError(`Error: ${err.response.status} ${err.response.statusText}`);
        } else if (err.request) {
          // Request was made but no response was received
          console.error("Error request:", err.request);
          setError(
            "No response received from the server. Please try again later."
          );
        } else {
          // Something else happened while setting up the request
          console.error("Error message:", err.message);
          setError("An error occurred. Please try again.");
        }
        setLatestSermon([]); // Clear any previous data
      } finally {
        setLoading(false); // Loading is complete
      }
    };

    fetchLatestSermons();
    console.log(latestSermon);
  }, []);


  const [active, setActive] = useState(2);

  const loadShow = () => {
    if(Array.isArray(latestSermon)){
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
  }
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
        <p className="text-[20px] text-center m-5">
          To see more posts or subscribe to the newsletter, click on the
          blogposts tab to view them.{" "}
          <a href="/sermons-archive" className="text-teal-300">
            Click here to view our archive
          </a>
        </p>

        <div className="image-slider">
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : Array.isArray(latestSermon) ? (
            latestSermon.map((sermon, index) => (
              <div
                key={index}
                id={`image-item-${index}`}
                className="image-item rounded-b-lg"
              >
                <img
                  src={sermon.thumbnail}
                  alt=""
                  className={`size-full rounded-lg relative ${
                    active ? "box-shadow" : ""
                  }`}
                />
                <p className="absolute text-white min-h-16 w-full p-2 text-center top-64 bg-black rounded-b-lg">
                  {sermon.title}
                </p>
              </div>
            ))
          ) : (
            <NoDataFoundDiv />
          )}
          <button id="nextImage" className="nextImage" onClick={handleNext}>
            &gt;
          </button>
          <button
            id="prevImage"
            className="prevImage font-extrabold"
            onClick={handlePrev}
          >
            &lt;
          </button>
        </div>
      </div>
    </>
  );
};

export default SermonArchiveHomeDiv;
