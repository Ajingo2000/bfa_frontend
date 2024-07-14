import React, { useState, useEffect } from "react";
import image1 from "../assets/images/features1.jpg";
import image2 from "../assets/images/features2.jpg";
import image3 from "../assets/images/features3.jpg";
import soulwinning from "../assets/images/soulWinning.jpeg";
import churchAttend from "../assets/images/churchAttend.jpeg";
import baptism_image_1 from "../assets/images/IMG-20240312-WA0014.jpg";
import church_attendance from "../assets/images/vlcsnap-2023-09-15-10h01m50s336-1476x830.png";
import bible_teaching from "../assets/images/bible teaching.jpeg";


const LatestActivity = () => {
  const activityItems = [
    
    {
      heading: " Church Planting",
      description:
        " We had a mission trip to Pader to go and minister by preaching the gospel in the Northern Area of Uganda. Pader is a district in Northern Uganda.",
      image: churchAttend,
    },
    {
      heading: " Bible Based Preaching",
      description:
        "We had a Jesus conference in December whereby we went out to preach the gospel to the lost on the streets, so as many could be saved! It was successful!",
      image: image2,
    },
    ,
    {
      heading: " Evangelisation of Africa",
      description:
        " We had a mission trip to Pader to go and minister by preaching the gospel in the Northern Area of Uganda. Pader is a district in Northern Uganda.",
      image: soulwinning,
    },
    ,
    {
      heading: " Bible Based Christianity Implemented",
      description:
        " We had a mission trip to Pader to go and minister by preaching the gospel in the Northern Area of Uganda. Pader is a district in Northern Uganda.",
      image: baptism_image_1,
    },
    ,
    {
      heading: " Preparing the way for Christ",
      description:
        " We had a mission trip to Pader to go and minister by preaching the gospel in the Northern Area of Uganda. Pader is a district in Northern Uganda.",
      image: church_attendance,
    },
  ];
  let numb = 0;
  const [activeDiv, setActiveDiv] = useState(0);
  return (
    <>
      <div className="p-3">
        <h1 className="font-extrabold text-[50px] text-center m-5">
          Mission Activity!
        </h1>
        <p className="text-center text-[20px]">
          There is a variety of Church events and functions we always conduct at
          our first church here at Bible Baptist Church that is to further the
          kingdom, or rather edify one another as well as engage in communion
          with the saints.
        </p>
      </div>
      <div className=" ">
        <div className=" block gap-5 lg:flex lg:justify-between lg:gap-5 lg:px-32 ">
          {activityItems.map((activity, index) => (
            <>
              <div
                className={
                  activeDiv === index
                    ? "w-full h-[450px] flex rounded-[2rem] mt-5 box-shadow transition-width duration-1000 ease"
                    : " lg:h-[450px] flex rounded-[2rem] mt-5 box-shadow transition-width duration-500 ease"
                }
                style={{
                  backgroundImage: `url(${activity.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  filter: "brightness(0.7)",
                }}
                onClick={() => setActiveDiv(index)}
              >
                <div
                  className={
                    activeDiv === index
                      ? " text-white p-7 flex  gap-4 absolute -bottom-0"
                      : " text-white p-4 flex items-center justify-center"
                  }
                >
                  <div className="bg-gray-600 rounded-full size-[50px] p-5   flex items-center justify-center">
                    {(numb += 1)}
                  </div>
                  <div
                    className={
                      activeDiv === index ? " text-black gap-4 " : "hidden"
                    }
                  >
                    <h4 className="font-extrabold text-[20px]">
                      {activity.heading}
                    </h4>
                    <p className="text-white ">{activity.description}</p>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default LatestActivity;
