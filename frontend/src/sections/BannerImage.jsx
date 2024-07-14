import React, { useState, useEffect } from "react";
import axios from "axios";
import SermonVideoDiv from "./SermonVideoDiv";

const BannerImage = () => {
  const apiUrl = process.env.REACT_APP_API_URL; //${apiUrl} 
  const [latestSermon, setLatestSermon] = useState([]);

  useEffect(() => {
    const fetchLatestSermon = async () => {
      const response = await axios.get(`${apiUrl}sermons`);
      setLatestSermon(response.data);
    };

    fetchLatestSermon();
  }, []);

  return (
    <>
      <div className="carousel-box relative min-w-[950px] flex justify-center items-center ">
        <div className="carousel">
          {latestSermon.map(
            (sermon, index) =>
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
          )}
        </div>
      </div>
    </>
  );
};

export default BannerImage;
