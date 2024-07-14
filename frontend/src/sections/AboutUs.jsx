import React from "react";
import { Link } from "react-router-dom";
import aboutimage from "../assets/images/Contact-meta.png";
import "../sections/animate.css";

const AboutUs = () => {
  return (
    <div className="p-2 lg:p-7 ">
      <h1 className="heading-special">Baptists for Africa</h1>

      <div className="md:grid grid-cols-2 gap-5 fadeInUp">
        <div className="flex flex-col items-center justify-center">
          <div className="">
            <h1 className="font-bold text-2xl">About Us</h1>
            <p className="text-xl">
              Baptists for Africa is an independent Baptist, church-planting
              mission in Africa, currently based in Uganda, operating
              particularly within the capital city of Kampala, based in
              Kisugu along Ntale Road, which is located in Kampala’s southern division (of
              four city-wide divisions), Makindye. They currently lead their
              first church plant in Africa, Bible Baptist Church, founded
              officially at about the beginning of 2022...
            </p>
            <a href={"/about-the-ministry"}>
              <button className="mt-5 bg-teal-500 text-white rounded-[20px] p-3 ">
                Learn More
              </button>
            </a>
          </div>
        </div>
        <div className="w-full h-full mt-3">
          <img
            src={aboutimage}
            alt="aboutus"
            className="rounded-lg w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
