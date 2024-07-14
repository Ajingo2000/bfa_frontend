import React from "react";
import {
  AboutUs,
  BibleLessons,
  ChurchInfo,
  ChurchSlider,
  ContactForm,
  Footers,
  LatestBlog,
  LatestSermon,
  NavBar,
  NewsLetter,
  SermonArchive,
  Navbar2,
  PageHead,
} from "../sections";
import { Helmet, HelmetProvider } from "react-helmet-async";
import BackToTopButton from "../constants/back-to-top-btn";
import { FaLesson } from "react-icons/fa6";
import sharegospel_image from "../assets/images/soul-winning-removebg-preview.png";
import soulwinner_image from "../assets/images/soul-winner-removebg-preview.png";
import newBelieveImage from "../assets/images/study-bible-removebg-preview.png";
import discipleshipImage from "../assets/images/discipleship_lesson-removebg-preview.png";
import disciplerClassImage from "../assets/images/class_preaching-removebg-preview.png";
import BibleTheology from "../assets/images/theology-removebg-preview.png";

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
      name: "OTHERS",
      link: "#",
      divImage: sharegospel_image,
    },
  ];
  return (
    <>
      <HelmetProvider>
      <Helmet>
          <meta charSet="utf-8" />
          <title>{`Ministry Resources | Baptists for Africa`}</title>
        </Helmet>
      <Navbar2 />
      <PageHead name="Ministry Resources" />
      <section className="">
        {/* <div className="p-4 gap-4"><h1 className="font-extrabold text-center text-3xl">Ministry Resources</h1></div> */}
        <section className="bg-gradient-to-r from-blue-200 to-teal-200 bg-opacity-80 w-full p-5 lg:px-20 lg:py-7 flex flex-col gap-5">
          <div className="flex flex-col gap-4">
            <h1 className="font-extrabold text-2xl text-center">
              All Available Free Ministry Resources
            </h1>
          </div>
          <div className="bg-white bg-opacity-60 rounded-xl p-5 flex flex-col gap-4 mt-4 text-lg">
            <p className="">
              All of the following materials have been produced by Jesse and
              John McPhaill, almost exclusively during their time in the mission
              field in Africa. They are to be freely distributed, “freely ye
              have received, freely give” (Matthew 10:8).
            </p>
            <p className="">
              These documents are <b>not copy-righted</b>, but are protected from
              misuse and/or sale by a restrictive Creative Commons license
              (Attribution-NonCommercial-NoDerivatives 4.0 International (CC
              BY-NC-ND 4.0)), meaning that they can be reproduced and
              distributed without permission by the authors, as long as credit
              is given to the authors, it is not for commercial use (i.e., for
              sale), and no changes have been made to the material, except where
              permission has been granted. <b>For personal use or unaltered
              evangelistic distribution, credit is not needed to be given to the
              authors.</b>
            </p>
            <p className="">All documents are available for free download as .pdf files.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 p-8 bg-white bg-opacity-60 rounded-xl  ">
            {resourceItems.map((item, index) => (
              <div className="">
                <a href={item.link}>
                <div className="bg-gray-100  p-8 border flex flex-col justify-center items-center rounded-xl shadow-lg hover:p-10 hover: box-shadow">
                  <img src={item.divImage} alt="" className="h-14 w-20" />
                  <div className="">
                    <h1 className="font-extrabold text-xl">{item.name}</h1>
                  </div>
                </div>
                </a>
              </div>
            ))}
          </div>
        </section>
      </section>
      <BackToTopButton />
      <Footers />
      </HelmetProvider>
    </>
  );
};

export default MinistryResources;
