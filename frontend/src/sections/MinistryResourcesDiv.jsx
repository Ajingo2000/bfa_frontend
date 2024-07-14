import React, {useEffect, useState} from "react";
import sharegospel_image from "../assets/images/soul-winning-removebg-preview.png";
import soulwinner_image from "../assets/images/soul-winner-removebg-preview.png";
import newBelieveImage from "../assets/images/study-bible-removebg-preview.png";
import discipleshipImage from "../assets/images/discipleship_lesson-removebg-preview.png";
import disciplerClassImage from "../assets/images/class_preaching-removebg-preview.png";
import BibleTheology from "../assets/images/theology-removebg-preview.png";
import "../sections/animate.css";

const MinistryResources = () => {
  const resourceItems = [
    {
      name: "New Believer Documents",
      link: "/new-believer-documents",
      divImage: newBelieveImage,
    },
    {
      name: "Soul Winning Lessons",
      link: "/soul-winning-lessons",
      divImage: soulwinner_image,
    },
    {
      name: "Discipleship Lessons",
      link: "/discipleship-lessons",
      divImage: discipleshipImage,
    },
    {
      name: "Discipler Class Lessons",
      link: "/discipler-class-lessons",
      divImage: disciplerClassImage,
    },
    {
      name: "Biblical Theology Lessons",
      link: "/biblical-theology-lessons",
      divImage: BibleTheology,
    },
    {
      name: "",
      link: "",
      divImage: sharegospel_image,
    },
  ];

  return (
    <div className="p-5">
      <h1 className="font-extrabold text-[50px] text-center m-5 fadeInUp">
        Ministry Resources.
      </h1>
      <p className="text-center text-xl m-5 fadeInUp">
        To have access to some of our shared helpful resources below, click on
        the links below, having a group of helpful resources ranging from soul
        winning, bible lessons to theology.
      </p>
      <div className=" justify-around gap-4 md:flex md:justify-around fadeInUp">

      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 p-8 rounded-xl  ">
            {resourceItems.map((item, index) => (
              <div className="">
                <a href={item.link}>
                <div className="bg-gray-100  p-8 border flex flex-col justify-center items-center rounded-xl shadow-lg hover:p-10 box-shadow bg-opacity-60 ">
                  <img src={item.divImage} alt="" className="h-14 w-20" />
                  <div className="">
                    <h1 className="font-extrabold text-xl">{item.name}</h1>
                  </div>
                </div>
                </a>
              </div>
            ))}
          </div>
    </div>
  );
};

export default MinistryResources;
