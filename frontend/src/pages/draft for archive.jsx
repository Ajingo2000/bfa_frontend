import React, { useState, useEffect } from "react";
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
  SearchResultDiv,
} from "../sections";
import BackToTopButton from "../constants/back-to-top-btn";
import SermonsTabs from "./sermons-tab";
import SermonsDownloadDiv from "./sermons-download-div";
import SermonsAudioPlayer from "./SermonsAudioPlayer";
import {
  FaClock,
  FaDownload,
  FaFilter,
  FaBookBible,
  FaSort,
  FaCalendar,
  FaLanguage,
  FaHeading,
  FaPersonPraying,
  FaPerson,
  FaChurch,
  FaAngleDown,
} from "react-icons/fa6";

const SermonsArchive = () => {
  const [activeInput, setActiveInput] = useState(1);
  const listItems = [
    {
      title: "A Sermons Title Batttosao",
      link: "",
    },
    {
      title: " A Sermons Title  ",
      link: "",
    },
    {
      title: "A Sermons Title",
      link: "",
    },
    {
      title: "A Sermons Title",
      link: "",
    },
    {
      title: "A Sermons Title",
      link: "",
    },
    {
      title: "A Sermons Title",
      link: "",
    },
    {
      title: "A Sermons Title",
      link: "",
    },
    {
      title: "A Sermons Title",
      link: "",
    },
    {
      title: "A Sermons Title",
      link: "",
    },
    {
      title: "A Sermons Title",
      link: "",
    },
    {
      title: "A Sermons Title",
      link: "",
    },
  ];
  return (
    <>
      <Navbar2 />
      <PageHead name="Sermons Archive" />
      <main className="bg-white w-full h-full">
        <section className="p-3 border-b-2">
          <div className="flex p-3">
            <h1 className="">Filtered By</h1>
            <h1 className="">/ Year 2024</h1>
          </div>
          <div className="flex p-3 items-center">
            <img src="" alt="" className="w-40 h-20 " />

            <div className="flex flex-col p-3">
              <h1 className="font-bold text-[20px]">The Playlist as of now.</h1>
              <p className="">
                Visit our youtube channel to see more content like this, please.
              </p>
            </div>
          </div>
        </section>
        <section className="size-full grid grid-cols-1 lg:grid lg:grid-cols-4 gap-4 p-7 bg-gray-100 ">
         
          <section className="h-full border-r-1 shadow-xl order-first lg:order-first">
            <div className="p-2 flex items-center gap-2">
              <p className="">
                <FaSort />{" "}
              </p>
              <p className="">Filter By</p>
            </div>
            <div className=" hidden lg:flex flex-col bg-white rounded-xl">
              <div className="h-full w-full p-3 border-b">
                <p className="w-full h-full ">Play All</p>
              </div>
              <ul className="h-full w-full ">
                {listItems.map((item, index) => (
                  <li
                    className="flex justify-between items-center gap-2 p-2 border-b w-full"
                    onClick={() => setActiveInput(index)}
                  >
                    <div className="flex">
                      <div className="size-6 ">
                        <p className=" size-full  border-2 shadow-md rounded-md flex justify-center items-center ">
                          {(index += 1)}
                        </p>
                      </div>
                      <p className="ml-3">{item.title}</p>
                    </div>
                    {activeInput === index ? (
                      <input
                        type="radio"
                        name="item"
                        className="size-6 accent-teal-600"
                        checked
                      />
                    ) : (
                      <input type="radio" name="item" className="size-6" />
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </section>
          <section className="col-span-3 order-last lg:order-last size-full">
            <div className="flex justify-between">
              <div className="p-1 ml-5 flex items-center gap-2">
                <p className="">Showing </p>
                <p className="">25 Courses</p>
              </div>
              <div className="p-2 ">
                <button className="p-2 rounded-lg flex items-center gap-2 bg-white">
                  Sort by Relevancy <FaAngleDown />{" "}
                </button>
              </div>
            </div>
            <div className="size-full px-8 bg-gray-100 flex flex-col justify-center items-center ">
              <SearchResultDiv />
            </div>
          </section>
        </section>
      </main>
      <BackToTopButton />
      <Footers />
    </>
  );
};

export default SermonsArchive;
