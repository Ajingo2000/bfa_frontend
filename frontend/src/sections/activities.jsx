import React from "react";
import image1 from "../assets/images/features1.jpg";
import image2 from "../assets/images/features2.jpg";
import image3 from "../assets/images/features3.jpg";
import "../constants/wrapper.css";

const ActivitySection = () => {
  const activityItems = [
    {
      heading: " Jesus Conference",
      description:
        "We had a Jesus conference in December whereby we went out to preach the gospel to the lost on the streets, so as many could be saved! It was successful!",
      image: image1,
    },
    {
      heading: " Pader Mission Trip",
      description:
        " We had a mission trip to Pader to go and minister by preaching the gospel in the Northern Area of Uganda. Pader is a district in Northern Uganda.",
      image: image2,
    },
    ,
    {
      heading: " Pader Mission Trip",
      description:
        " We had a mission trip to Pader to go and minister by preaching the gospel in the Northern Area of Uganda. Pader is a district in Northern Uganda.",
      image: image3,
    },
    ,
    {
      heading: " Pader Mission Trip",
      description:
        " We had a mission trip to Pader to go and minister by preaching the gospel in the Northern Area of Uganda. Pader is a district in Northern Uganda.",
      image: image1,
    },
    ,
    {
      heading: " Pader Mission Trip",
      description:
        " We had a mission trip to Pader to go and minister by preaching the gospel in the Northern Area of Uganda. Pader is a district in Northern Uganda.",
      image: image2,
    },
  ];
  let numb = 0
  return (
    <>
      <div className="p-3">
      <h1 className="font-extrabold text-[50px] text-center m-5">
        Recent Activity!
      </h1>
      <p className="text-center text-[20px]">There is a variety of Church events and functions we always conduct at our first church here at Bible Baptist Church that is to further the kingdom, or rather edify one another as well as engage in communion with the saints.</p>
      </div>
      <div className="activity-wrapper ">
      
        <div className="activity-container ">
          {activityItems.map((activity, index) => (
            <>
              <input
                type="radio"
                name="slide"
                id={`card-${index}`}
                className="activity-input"
               checked/>
              <label
                htmlFor={`card-${index}`}
                className="activity-card "
                style={{
                  backgroundImage: `url(${activity.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  filter: "brightness(0.7)",
                }}
              >
                <div className="activity-row text-white">
                  <div className="activity-icon">{numb +=1}</div>
                  <div className="activity-description text-black  mt-3 p-3">
                    <h4 className="font-extrabold">{activity.heading}</h4>
                    <p className="">{activity.description}</p>
                  </div>
                </div>
              </label>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default ActivitySection;
